import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Header from '../components/header/Header.jsx'
import Fornecedores from '../pages/fornecedores/fornecedores.jsx'
import Colaboradores from '../pages/colaboradores/Colaboradores.jsx'

export default function Router() {

    return (
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cardapio' exact element={<cardapio />} />
            <Route path='/clientes' exact element={<clientes/>} />
            <Route path='/colaboradores' exact element={<Colaboradores/>} />
            <Route path='/fornecedores' exact element={<Fornecedores />} /> 
          </Routes>
        </BrowserRouter>
    )
}