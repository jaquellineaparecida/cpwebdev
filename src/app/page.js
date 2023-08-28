import Send from './components/Send'
import Header from './components/header'
import Input from './components/input'


export default function Home() {
  return (
      <main className='m-1'>
          <Header> </Header>

          <Input> </Input>

          <Send> </Send>

          <div className="mt-5"> 
            <p> NOME: André Testai Muchao RM: 99637 </p> 
            <p> NOME: Caio Davi Gomes Munhoz RM: 97970 </p> 
            <p> NOME: Florbela Freitas Oliveira RM: 99475 </p> 
            <p> NOME: Jaquelline Aparecida Candido Barbosa de Sousa RM: 99553 </p> 
          </div>

      </main> 
  )
}
