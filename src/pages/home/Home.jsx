import { LoginContext } from '../../context/context_login'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const { usuario, setUsuario } = useContext(LoginContext)
  const navigate = useNavigate()

  return ( 
    <div>
      <h1>{`Bem vindo ao Pizza Management, ${usuario[0].nome_colaborador}!`}</h1>
      <button type='button' onClick={(e) => {navigate('/cardapio')}}>Cardapio</button>
      <button type='button' onClick={(e) => {navigate('/colaboradores')}}>Colaboradores</button>

    </div>
   );
}
 
export default Home;