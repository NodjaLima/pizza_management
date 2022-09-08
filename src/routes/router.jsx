import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Header from '../components/header/Header.jsx'
import Fornecedores from '../pages/fornecedores/fornecedores.jsx'
import Cardapio from '../pages/cardapio/cardapio.jsx'
import Login from '../pages/login/login.jsx'
import { LoginProvider } from '../context/context_login.jsx'

export default function Router() {

    return (
        <LoginProvider>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' exact element={<Cardapio />} />
                <Route path='/clientes' exact element={<clientes/>} />
                <Route path='/colaboradores' exact element={<colaboradores/>} />
                <Route path='/fornecedores' exact element={<Fornecedores />} />
                <Route path='/login' exact element={<Login />} />
              </Routes>
          </BrowserRouter>
        </LoginProvider>
    )
}