import './App.css'
// import Exemplo from './components/Exemplo'
import CartaoPerfil from './components/CartaoPerfil'
import Header from './components/header.jsx'
import funcionarios from './data/funcionario'
import ExemploUseState from './components/ExemploUseState'
import FormContato from './components/FormContato'


// const habilidades = ['Coleta Forense', 'Extração de Mobile', 'Análise Forense']


function App() {
  return (
    <div className='app'>
      <Header/>
      <h1>Nossa Equipe</h1>
      <br />
      <div className='grade'>
        {funcionarios.map(funcionario => (
          <CartaoPerfil 
          key={funcionario.nome}
          nome={funcionario.nome}
          cargo={funcionario.cargo}
          empresa={funcionario.empresa}
          bio={funcionario.bio}
          foto={funcionario.foto}
          habilidades={funcionario.habilidades}
          />)
          )
        }
      </div>
      <h1>Formulário de Contato</h1>
      <FormContato />
    </div>
  )
}

export default App
