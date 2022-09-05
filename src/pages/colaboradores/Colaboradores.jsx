import CardColaboradores from "../../components/cardColaboradores/CardColaboradores";
import MenuContainer from "../../components/menu/MenuContainer"
import './Colaboradores.css';

const Colaboradores = () => {
  return (
    <div className="container-main-colaboradores">
      <nav className="nav-container-main-colaboradores">
        <MenuContainer/>
      </nav>
      <CardColaboradores />
    </div>
  );
};

export default Colaboradores;