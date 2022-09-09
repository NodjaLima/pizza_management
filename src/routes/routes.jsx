import { Routes, Route } from "react-router-dom"
import { useContext } from "react"
import { LoginContext } from '../context/context_login.jsx'
import Fornecedores from '../pages/fornecedores/fornecedores.jsx'
import Colaboradores from '../pages/colaboradores/Colaboradores.jsx'
import Cardapio from '../pages/cardapio/cardapio.jsx'
import Clientes from '../pages/clientes/clientes.jsx'
import Login from '../pages/login/login.jsx'
import Home from '../pages/home/Home.jsx'

export const AppRoutes = () => {

  const { usuario } = useContext(LoginContext)
 
  return (

    <Routes>
    <Route path='/' element={<Home />} />
    {usuario.length == 1 && <Route path='/cardapio' exact element={<Cardapio />} />}
    {usuario.length == 1 && <Route path='/cliente' exact element={<Clientes/>} />}
    {usuario.length == 1 && <Route path='/colaboradores' exact element={<Colaboradores/>} />}
    {usuario.length == 1 && <Route path='/fornecedores' exact element={<Fornecedores />} />}
    <Route path='/login' exact element={<Login />} />
    </Routes>

  )
}