import Send from './components/Send'
import Header from './components/header'
import Input from './components/input'
import Message from './components/message'


export default function Home() {
  return (
      <main className='m-1'>
          <Header/> 

         <Message> {'Olá seja bem-vindo ao bot de vistoria de bicicletas da Porto Seguro! Aqui faremos todo o processo de vistoria da sua bike, você está pronto?'} </Message>
      </main> 
  )
}
