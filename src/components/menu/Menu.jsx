import { Link } from 'react-router-dom'

const Menu = () => {
  return ( 
    <div className="menu">
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/cardapio'><li>Cardapio</li></Link>
        <Link to='/clientes'><li>Clientes</li></Link>
        <Link to='/colaboradores'><li>Colaboradores</li></Link>
        <Link to='/fornecedores'><li>Fornecedores</li></Link>
      </ul>
    </div>
   );
}
 
export default Menu;