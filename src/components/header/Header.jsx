import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navegate = useNavigate();

    return (
      <div className= "navbar">
        <div className="logo">
            <img src="/src/assets/img/logo.png"></img>
        </div>
        <div className="links-menu">  
            <div className="link" onClick={() => navegate("/cardapio")}>
               CARDAPIO
            </div>
            <div className="link" onClick={() => navegate("/cliente")}>
               CLIENTE
            </div>
            <div className="link"onClick={() => navegate("/colaboradores")}>
               COLABORADORES
            </div>
            <div className="link"onClick={() => navegate("/fornecedores")}>
               FORNECEDORES
            </div>
            <div className="link"onClick={() => navegate("/colaboradores")}>
               COLABORADORES
            </div>
            <div className="link"onClick={() => navegate("/fornecedores")}>
               FORNECEDORES
            </div>
        </div>
      </div>
    )
}