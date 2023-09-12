import Send from '../components/Send'
import Header from '../components/header'
import Message from '../components/message'
import Botao from '../components/button'
import MessageUser from '../components/msguser'
import Imagem from '../components/image'

export default function ChatBot() {
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

        <Message> {'Muito bem! Agora para verificarmos a sua bike precisamos da nota fiscal ou do boleto da bicicleta que você esta cotando, você prefere inserir o boleto ou a nota fiscal?'} </Message>

        <div className='flex flex-row'> 
          <Botao> {'Boleto'} </Botao>

          <Botao> {'Nota Fiscal'} </Botao>
        </div>
        
        <MessageUser className='pr-1'> {'doc.docx'} </MessageUser>

        <Message> {'Okay! Agora insira a marca da sua bicicleta'} </Message>

        <div className='flex flex-row'> 
          <Botao> {'Caloi'} </Botao>

          <Botao> {'Cervélo'} </Botao>

          <Botao> {'Trek'} </Botao>

          <Botao> {'Cannondale'} </Botao>
        </div>

        <div className='md:flex md:justify-center md:mt-[-3.5em] lg:flex lg:justify-center lg:mt-[-3.5em]'>
        <Botao> {'Scott'} </Botao>

        </div>
    
        <Message> {'Okay! Agora insira o modelo da sua bicicleta'} </Message>

        <div className='flex flex-row'> 
          <Botao> {'Off Road'} </Botao>

          <Botao> {'Elétrica'} </Botao>

          <Botao> {'Urbana'} </Botao>

          <Botao> {'Dobrável'} </Botao>
        </div>

        <div className='md:flex md:justify-center md:mt-[-3.5em] lg:flex lg:justify-center lg:mt-[-3.5em]'>
         <Botao> {'Speed'} </Botao>
        </div>
        

        <Message> {'Perfeito! Agora insira o número de série da sua bike!'} </Message>

        <MessageUser> {'5586186'} </MessageUser>

        <Message> {'Agora envie uma foto do número de série da sua bike'} </Message>

        <Imagem  
          src={'/images/nrserie.png'}
          alt=""
          width={150}
          height={50}
        />  
        
        <Message> {'Quase lá! A sua bike  possui algum acessório?'} </Message>

        <div className='flex flex-row'> 
          <Botao> {'Não'} </Botao>

          <Botao> {'Sim'} </Botao>
        </div>

        <Message> {'Dê uma pequena descrição de TODOS os acessórios inclusos na sua bike.'} </Message>

        <MessageUser> {'Sino frontal.'} </MessageUser>

        <Message> {'Insira o valor do acessório.'} </Message>

        <MessageUser> {'240.00 reais'} </MessageUser>

        <Message> {'Estamos quase terminando! Agora mande as fotos da sua bike (2 laterias, 1 frontal e 1 traseira)'} </Message>

        <Imagem  
          src={'/images/bike1.png'}
          alt=""
          width={150}
          height={50}
        />  

        <Imagem  
          src={'/images/bike2.png'}
          alt=""
          width={150}
          height={50}
        />  

        <Imagem  
          src={'/images/bike3.png'}
          alt=""
          width={150}
          height={50}
        />  

        <Imagem  
          src={'/images/bike4.png'}
          alt=""
          width={150}
          height={50}
        />  

        <Message> {'Parabéns! Sua vistoria foi finalizada com sucesso!'} </Message>

        <footer className="justify-end">
          <Send/>
        </footer>
         
      </main> 
  )
}
