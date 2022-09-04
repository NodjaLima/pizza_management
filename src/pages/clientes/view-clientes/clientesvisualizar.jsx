import React from "react";
import Tabela from "../../../components/table/tabelaclientes";
import Listadeclientes from "./listadeclientes";


const Verclientes = () => {

    const clientes = [
        {id: 1, nome:'Renato', cpf:'111.111.111-66', endereco:'Rua do Flamengo, 8', email:'renato@renato.com', telefone:'21988888888'}, 
        {id: 2, nome:'Nodja', cpf:'222.222.222-77', endereco:'Rua do Larica, 420', email:'nodja@nodja.com', telefone:'21977777777'},
        {id: 3, nome:'Larrissa', cpf:'333.333.333-88', endereco:'Rua do CSS, 777', email:'larrissa@larrissa.com', telefone:'21966666666'},
        {id: 4, nome:'Helder', cpf:'444.444.444-99', endereco:'Rua do Zueiro, 100', email:'helder@helder.com', telefone:'21955555555'}
    ]

    return (

        <div>
            <h1> Aqui será mostrada a lista de clientes.</h1> <br></br>
            {/* <Listadeclientes clientes={clientes}/> */}
            <Tabela clientes={clientes}/>
        </div>
        
    )
    
}

export default Verclientes