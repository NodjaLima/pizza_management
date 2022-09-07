import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Menu from './components/menu/Menu'
import Cardapio from './pages/cardapio/cardapio'
import Fornecedores from './pages/fornecedores/Fornecedores'
import Home from './pages/home/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Menu />
          <Routes>
            //para criar rotas usar letras minuscular e separar palavras com _
            <Route path='/' exact element={<Home />} />
            <Route path='/cardapio' exact element={<Cardapio />} />
            <Route path='/clientes' exact element={<h1>Essa será a pagina de clientes</h1>} />
            <Route path='/colaboradores' exact element={<h1>Essa será a pagina de colaboradores</h1>} />
            <Route path='/fornecedores' exact element={<h1>Essa será a essa será a pagina de fornecedores</h1>} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
