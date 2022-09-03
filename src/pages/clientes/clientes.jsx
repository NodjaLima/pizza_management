import React from 'react'
import './clientes.css'
import Formcadastro from './clientecadastrar';
import { useNavigate } from "react-router-dom";
import { List } from 'phosphor-react';
import Clientehome from './clientehome';

export default function Clientes() {

    const navegate = useNavigate();

    return (
      <div className='pagina'>
        
            <div className='clientes-conteudo'>

                <div className= "navbar-cliente">
                    <div className="links-menu-cliente">  

                        <div className="link-cliente" onClick={() => navegate("/clientes/cadastrar")}>
                        CADASTRAR CLIENTES
                        </div>
                        <div className="link-cliente" onClick={() => navegate("/clientes/lista")}>
                        VER CLIENTES
                        </div>
                        <div className="link-cliente" onClick={() => navegate("/clientes/atualizar")}>
                        ATUALIZAR CLIENTES
                        </div>
                        <div className="link-cliente" onClick={() => navegate("/clientes/deletar")}>
                        DELETAR CLIENTES
                        </div>
                    </div>
                </div>

                <div className='pagina-view'>
                    <Formcadastro/>
                 </div>
      </div>  
      
      </div>  

    )
}