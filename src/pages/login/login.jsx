import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../components/login/LoginComponent";
import { LoginContext } from '../../context/context_login';

const Login = () => {
  const navigate = useNavigate()

  const { usuario } = useContext(LoginContext)
  const [entrante, setEntrante] = useState(
    {
      usuario: '',
      senha: ''
    })
    
    
  const Logar = (valor) => {

    const isValid = usuario.filter((item) => item.usuario === valor.usuario && item.senha === valor.senha)
    if (isValid.length == 1) {
      navigate('/')
    } else {
      alert('usuario nao encontrado')
    }
           
    setEntrante({
      usuario: '',
      senha: ''
    }) 
  }

  return ( 
    <LoginComponent 
      onBlurUsuario={(e) => {setEntrante({...entrante, usuario: e.target.value})}} 
      onBlurSenha={(e) => {setEntrante({...entrante, senha: e.target.value})}}
      onClick={(e)=>{Logar(entrante)}} 
      label={"Entrar"}
    />
    );
}
 
export default Login;