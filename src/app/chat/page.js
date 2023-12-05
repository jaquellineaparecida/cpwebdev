"use client"

import Header from '../components/header'
import Message from '../components/message'
import MessageUser from '../components/msguser'
import Image from 'next/image'
import { useState } from 'react'

export default function ChatBot() {

  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]); // Armazenando a conversa em uma lista

  const sendMessage = () => {
    if (message.trim() === '') return; // Impossibilita o envio de mensagens vazias

    // Adiciona a mensagem do usuário ao histórico do chat
    setChat(prevChat => [
      ...prevChat,
      { text: message, type: 'user' }
    ]);

    // Enviando a mensagem para a api Watson Assistant
    fetch('http://localhost:3000/api/watson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
      // Adicionando a resposta do chatbot ao histórico do chat
      setChat(prevChat => [
        ...prevChat,
        { text: data.response, type: 'bot' }
      ]);
      setMessage(''); // Limpando o campo de mensagem após enviar
    })
    .catch(error => {
      console.error('Erro:', error);
    });
  };

  return (
    <main>
      <Header />

      {chat.map((chatItem, index) => {
        if (chatItem.type === 'user') {
          return (
            <MessageUser key={index}>{chatItem.text}</MessageUser>
          );
        } else {
          return (
            <Message key={index}>{chatItem.text}</Message>
          );
        }
      })}

      <div className="flex flex-row mt-[28em] ml-3 md:ml-12 md:mb-4 lg:flex lg:justify-center lg:mb-8 static">
        <div className="flex justify-center mb-3 mr-2">
          <Image className="md:w-10 md:h-10 md:mt-2 md:mr-4" width={20} height={15} src="/images/cam.svg" alt="" />
        </div>

        <div>
          <input type="text" className="border-0 bg-zinc-300 rounded-full w-80 h-8 pl-4 md:w-[38em] md:h-14 lg:h-14 lg:w-[80em]" onChange={(event) => setMessage(event.target.value)}
          value={message} 
          // Função para que o usuário envie uma mensagem a partir da tecla enter 
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              sendMessage();
            }
          }}
          
          />
        </div>

        <div className="flex justify-center mb-2 mr-2 lg:mt-[-3px] lg:mr-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
          <Image className="md:w-20 md:h-16" width={35} height={35} src="/images/send.svg" alt="" onClick={sendMessage} />
        </div>

      </div>

    </main>
  )
}
