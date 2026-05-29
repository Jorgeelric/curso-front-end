import './App.css'
// import Exemplo from './components/Exemplo'
import CartaoPerfil from './components/CartaoPerfil'
import Header from './components/header.jsx'
import funcionarios from './data/funcionario'
import ExemploUseState from './components/ExemploUseState'
import FormContato from './components/FormContato'
import SecaoEquipe from './components/SecaoEquipe'

function App() {
  return (
    <div className='app'>
      <Header/>
      <h1>Nossa Equipe</h1>
      <SecaoEquipe/>
      <h1>Formulário de Contato</h1>
      <FormContato />
    </div>
  )
}

export default App
