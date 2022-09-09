import { useContext } from "react";
import { LoginContext } from "../../context/context_login";
import { useNavigate } from "react-router-dom";
import './boasvindas.css'

const BoasVindas = () => {
   
  const {usuario} = useContext(LoginContext)
  const navigate = useNavigate()

  const redirect = (rota) => {
    navigate(rota)
  }

  return ( 
    <div className="boasvindas-container">
      <h3>{`Bem vindo ao Pizza Management, ${usuario[0].nome_colaborador}!`}</h3>
      <h4>Clique no Modulo Administrativo desejado para acessar suas funcionalidades:</h4>
      <button className="btn-rota" onClick={(e) => redirect('/cardapio')}>Cardapio</button>
      <button className="btn-rota" onClick={(e) => redirect('/cliente')}>Clientes</button>
      <button className="btn-rota" onClick={(e) => redirect('/colaboradores')}>Colaboradores</button>
      <button className="btn-rota" onClick={(e) => redirect('/fornecedores')}>Fornecedores</button>
    </div>
   );
}
 
export default BoasVindas;