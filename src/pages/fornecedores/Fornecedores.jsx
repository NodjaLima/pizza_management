import { useState } from "react";
import FormsFornecedores from "../../components/fornecedores/box_forms_fornecedores/forms_fornecedores"
import BoxMenu from "../../components/fornecedores/box_menu_fornecedores/boxMenu"
import ListaFornecedores from "../../components/fornecedores/box_lista_fornecedores/lista_fornecedores";
import './fornecedores.css'

export default function Fornecedores() {
  const [exibir, setExibir] = useState(false);
  const [inserir, setInserir] = useState(false);

  return (
    <div className = "box">
      
      <BoxMenu onClickExibir = {e => {e.preventDefault(); setExibir(true); setInserir(false)}} 
       onClickInserir = {e => {e.preventDefault(); setInserir(true); setExibir(false)
      }}/>
      
      {exibir && <ListaFornecedores/>}
      {inserir && <FormsFornecedores/>}
    </div>

  );
};
