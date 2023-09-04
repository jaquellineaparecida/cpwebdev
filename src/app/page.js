import Send from './components/Send'
import Header from './components/header'
import Input from './components/input'
import Message from './components/message'
import Botao from './components/button'
import MessageUser from './components/msguser'


export default function Home() {
  return (
      <main>
          <Header/> 

         <Message> {'Olá seja bem-vindo ao bot de vistoria de bicicletas da Porto Seguro! Aqui faremos todo o processo de vistoria da sua bike, você está pronto?'} </Message>

        <div className='flex flex-row'>
          <Botao> {'Cancelar'} </Botao>

          <Botao> {'Sim'} </Botao>
        </div>

        <Message> {'Perfeito! Para começarmos a vistoria eu vou precisar de algumas informações. Primeiro insira o valor (preciso ou aproximado) da sua bike'} </Message>

        <MessageUser> {'140.000 reais'} </MessageUser>

        
        <footer className="justify-end mt-72">
          <Send/>
        </footer>
         
      </main> 
  )
}
