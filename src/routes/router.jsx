import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Header from '../components/header/Header.jsx'
import Fornecedores from '../pages/fornecedores/fornecedores.jsx'
import Clientes from '../pages/clientes/clientes.jsx'

export default function Router() {

    return (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cardapio' exact element={<cardapio />} />
            <Route path='/clientes' exact element={<Clientes/>} />
            <Route path='/colaboradores' exact element={<colaboradores/>} />
            <Route path='/fornecedores' exact element={<Fornecedores />} /> 
          </Routes>
        </BrowserRouter>
    )
}