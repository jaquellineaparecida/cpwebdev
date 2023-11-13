"use client"

import Header from '../components/header'
import Message from '../components/message'
import MessageUser from '../components/msguser'
import Image from 'next/image'
import { useState } from 'react'

export default function ChatBot() {

  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]); // Estado para armazenar a conversa

  const sendMessage = () => {
    if (message.trim() === '') return; // Evita enviar mensagens vazias

    // Adiciona a mensagem do usuário ao histórico do chat
    setChat(prevChat => [
      ...prevChat,
      { text: message, type: 'user' }
    ]);

    // Envia a mensagem para o Watson Assistant (ou seu backend)
    fetch('http://localhost:3000/api/watson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
      // Adiciona a resposta do chatbot ao histórico do chat
      setChat(prevChat => [
        ...prevChat,
        { text: data.response, type: 'bot' }
      ]);
      setMessage(''); // Limpa o campo de mensagem após enviar
    })
    .catch(error => {
      console.error('Erro:', error);
      // Lidar com erros, se necessário
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

      <div className="flex flex-row mt-6 ml-3 md:ml-12 md:mb-4 lg:flex lg:justify-center lg:mb-8">
        <div className="flex justify-center mb-3 mr-2">
          <Image className="md:w-10 md:h-10 md:mt-2 md:mr-4" width={20} height={15} src="/images/cam.svg" alt="" />
        </div>

        <div>
          <input type="text" className="border-0 bg-zinc-300 rounded-full w-80 h-8 pl-4 md:w-[38em] md:h-14 lg:h-14 lg:w-[80em]" onChange={(event) => setMessage(event.target.value)}
          value={message} />
        </div>

        <div className="flex justify-center mb-2 mr-2 lg:mt-[-3px] lg:mr-1">
          <Image className="md:w-20 md:h-16" width={35} height={35} src="/images/send.svg" alt="" onClick={sendMessage} />
        </div>

      </div>

    </main>
  )
}
