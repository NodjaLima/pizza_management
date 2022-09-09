import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../components/login/LoginComponent";
import { LoginContext } from '../../context/context_login';
import { GetColaboradores } from '../../services/requisicoes_colaboradores'

const Login = () => {
  const navigate = useNavigate()

  const { usuario, setUsuario } = useContext(LoginContext)
  const [entrante, setEntrante] = useState(
    {
      matricula_colaborador: '',
      cpf_colaborador: "",
      nome_colaborador: ''
    })

    useEffect(()=> {
      GetColaboradores().then((response) => {
        setEntrante(response.data)
      }).catch((e)=> e.message)
    }, [])
    console.log(entrante)
    
  const Logar = (valor) => {

    const isValid = entrante.filter((item) => item.matricula_colaborador === Number(valor.matricula_colaborador) && item.cpf_colaborador === valor.cpf_colaborador)
    console.log(valor)

    if (isValid.length == 1) {
      navigate('/menu')
      setUsuario(isValid)
    } else {
      alert('usuario nao encontrado')
    }
  }

  return ( 
    <LoginComponent 
      onBlurUsuario={(e) => {setUsuario({...usuario, matricula_colaborador: e.target.value})}} 
      onBlurSenha={(e) => {setUsuario({...usuario, cpf_colaborador: e.target.value})}}
      onClick={(e)=>{Logar(usuario)}} 
      label={"Entrar"}
    />
    );
}
 
export default Login;