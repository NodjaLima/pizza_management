import { Link } from "react-router-dom";

const Cardapio = () => {
  return ( 
    <spam>
      <h1>GERENCIE O SEU CARDÁPIO</h1>
      <Link to='/cardapio_completo'><button>Vizualizar</button></Link>
      <Link to='/cardapio_inserir'><button>Inserir</button></Link>
      <Link to='/cardapio_editar'><button>Editar</button></Link>
      <Link to='/cardapio_deletar'><button>Deletar</button></Link>
    </spam>
   );
}
 
export default Cardapio;