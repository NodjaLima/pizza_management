import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
import { List } from 'phosphor-react';

export default function Header() {
    const navegate = useNavigate();

    return (
      <div className= "navbar">
        <div className="logo">
            <img src="/src/assets/img/logopizza.png"></img>
        </div>
        <div className="links-menu">  
            <div className="link" onClick={() => navegate("/home")}>
               HOME 
            </div>
            <div className="link" onClick={() => navegate("/cardapio")}>
               CARDAPIO
            </div>
            <div className="link"onClick={() => navegate("/clientes")}>
               CLIENTES
            </div>
            <div className="link"onClick={() => navegate("/colaboradores")}>
               COLABORADORES
            </div>
            <div className="link"onClick={() => navegate("/fornecedores")}>
               FORNECEDORES
            </div>
            <div className="hamburguer">
                <List size={40} />
            </div>
        </div>
      </div>
    )
}