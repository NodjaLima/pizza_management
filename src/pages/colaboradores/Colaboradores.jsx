import MenuLateral from "../../components/menu/MenuLateral"
import {TabelaColaboradores} from "../../components/table/table-colaborador/TableColaborador";
import FormColaboradores from "../../components/formColaboradores/FormColaboradores";
import { useState } from "react";
import './Colaboradores.css';

const Colaboradores = () => {
  const [listar, setListar] = useState(false);
  const [cadastrar, setCadastrar] = useState(false);

  return (
    <div className="container-main-colaboradores">
      <nav className="nav-container-main-colaboradores">
        <MenuLateral onClickListar={e => {
          e.preventDefault();
          setListar(true);
          setCadastrar(false);
        }} onClickCadastrar={e => {
          e.preventDefault();
          setCadastrar(true);
          setListar(false)
        }}/>
      </nav>
      {listar && <TabelaColaboradores/>}
      {cadastrar && <FormColaboradores/>}
    </div>
  );
};

export default Colaboradores;