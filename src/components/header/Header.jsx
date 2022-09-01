import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
import { List } from 'phosphor-react';

export default function Header() {
    const navegate = useNavigate();

    return (
      <div className= "navbar">
        <div className="logo">
            
        </div>
        <div className="links-menu">  
            <div className="link" onClick={() => navegate("/home")}>
               HOME 
            </div>
            <div className="link" onClick={() => navegate("/sobre")}>
               SOBRE
            </div>
            <div className="link"onClick={() => navegate("/contato")}>
               CONTATO
            </div>
            <div className="link"onClick={() => navegate("/login")}>
               LOGIN
            </div>
            <div className="hamburguer">
                <List size={40} />
            </div>
        </div>
      </div>
    )
}