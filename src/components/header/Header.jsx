import React from 'react'
import './Header.css'
import { useNavigate } from "react-router-dom";
import logo from  '../../assets/img/logo.png'

export default function Header() {
    const navegate = useNavigate();

    return (
      <div className= "navbar">
        <div className="logo">
            <img src={logo} onClick={() => navegate("/")}></img>
        </div>
        <div className="links-menu">  
            <div className="link" onClick={() => navegate("/boas-vindas")}>
               Home
            </div>
            
            <div className="link" onClick={() => navegate("/sobre")}>
               Sobre
            </div>

            <div className="link"onClick={() => navegate("/")}>
               Login
            </div>

        </div>
      </div>
    )
}