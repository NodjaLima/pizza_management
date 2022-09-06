import CardColaboradores from "../../components/cardColaboradores/CardColaboradores";
import MenuLateral from "../../components/menu/MenuLateral"
import TabelaColaboradores from "../../components/table/table-colaborador/TableColaborador";
import './Colaboradores.css';

const Colaboradores = () => {
  return (
    <div className="container-main-colaboradores">
      <nav className="nav-container-main-colaboradores">
        <MenuLateral/>
      </nav>
      <TabelaColaboradores/>
    </div>
  );
};

export default Colaboradores;