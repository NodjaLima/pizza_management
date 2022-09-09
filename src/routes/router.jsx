import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home.jsx'
import Header from '../components/header/Header.jsx'
import Fornecedores from '../pages/fornecedores/Fornecedores'
import Colaboradores from '../pages/colaboradores/Colaboradores.jsx'
import Cardapio from '../pages/cardapio/cardapio.jsx'
import Login from '../pages/login/login.jsx'
import { LoginProvider } from '../context/context_login.jsx'
import { ColaboradorProvider } from '../context/context_colaborador.jsx'


export default function Router() {

    return (
        <LoginProvider>
          <ColaboradorProvider>
          <BrowserRouter>
            <Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cardapio' exact element={<Cardapio />} />
                <Route path='/clientes' exact element={<clientes/>} />
                <Route path='/colaboradores' exact element={<Colaboradores/>} />
                <Route path='/fornecedores' exact element={<Fornecedores />} />
                <Route path='/login' exact element={<Login />} />
              </Routes>
          </BrowserRouter>
          </ColaboradorProvider>
        </LoginProvider>
    )
}

// CRIAR ANIMAÇÃO NA HOME;
// MENU DA NAVBAR SUPERIOR;
// CRIAR PÁGINA PÓS LOGIN;
// PÁGINA PÓS LOGIN -> CRIAR MENU DE NAVEGAÇÃO ENTRE AS ENTIDADES (CARDS ETC...).