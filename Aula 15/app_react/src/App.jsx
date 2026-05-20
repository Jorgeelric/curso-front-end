import './App.css'
import Exemplo from './components/Exemplo'
import CartaoPerfil from './components/CartaoPerfil'
import Header from './components/header.jsx'

function App() {
  return (
      <div className='app'>
        <h1>Nossa Equipe</h1>
        <br />
          <div className='grade'>
          <CartaoPerfil/>
          <CartaoPerfil/>
          <CartaoPerfil/>
          <CartaoPerfil/>
          </div>
      </div>
  )
}

export default App
