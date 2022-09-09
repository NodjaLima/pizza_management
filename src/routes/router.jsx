import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Header from '../components/header/Header.jsx'
import Fornecedores from '../pages/fornecedores/fornecedores.jsx'
import Clientes from '../pages/clientes/clientes.jsx'
import Colaboradores from '../pages/colaboradores/Colaboradores.jsx'
import Cardapio from '../pages/cardapio/cardapio.jsx'
import Login from '../pages/login/login.jsx'
import { LoginContext, LoginProvider } from '../context/context_login.jsx'
import { useContext } from 'react'
import { AppRoutes } from './routes.jsx'


export default function Router() {


    return (
        <LoginProvider>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' exact element={<Cardapio />} />
                <Route path='/cliente' exact element={<Clientes/>} />
                <Route path='/colaboradores' exact element={<Colaboradores/>} />
                <Route path='/fornecedores' exact element={<Fornecedores />} />
                <Route path='/login' exact element={<Login />} />
              </Routes>
          </BrowserRouter>
        </LoginProvider>
    
    )
}