import React from 'react'
// import { useNavigate } from "react-router-dom";
import { useState } from 'react';


import Formcadastro from './form-clientes/clientecadastrar';
import Clientehome from './home-clientes/clientehome';
import Verclientes from './view-clientes/clientesvisualizar';
import Atualizarclientes from './att-clientes/clienteatualizar';
import Deletaclientes from './delete-clientes/clientedeletar';




import './clientes.css'



export default function Clientes() {

    // const navegate = useNavigate();

    const [pagina, setPagina] = useState(<Clientehome/>)  

    return (
      <div className='pagina'>
        
            <div className='clientes-conteudo'>

                <div className= "navbar-cliente">
                    <div className="links-menu-cliente">  

                        <button className="link-cliente" onClick={() => {setPagina(<Formcadastro />)}}>
                        CADASTRAR CLIENTES
                        </button>
                        <button className="link-cliente" onClick={() => {setPagina(<Verclientes />)}}>
                        VER CLIENTES
                        </button>
                        <button className="link-cliente" onClick={() => {setPagina(<Atualizarclientes />)}}>
                        ATUALIZAR CLIENTES
                        </button>
                        <button className="link-cliente" onClick={() => {setPagina(<Deletaclientes />)}}>
                        DELETAR CLIENTES
                        </button>
                    </div>
                </div>

                <div className='pagina-view'>
                    
                    {pagina}

                </div>
            </div>  
      
      </div>  

    )
}