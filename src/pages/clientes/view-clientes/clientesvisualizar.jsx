import React from "react";
import Tabelacliente from "../../../components/table/tab-clientes/tabelaclientes";

import { useState, useEffect } from "react";

import axios from "axios";



const Verclientes = () => {

    const [cliente, setCliente] = useState([])

    useEffect(() => {
        axios.get('https://restaurante-api-m4.herokuapp.com/clientes')
        .then((response) =>{
            
            console.log(response.data)
            setCliente(response.data)
            // console.log("seu cliente é: " + JSON.stringify(cliente))

        })
        .catch((error) =>{
            console.log(error.message)
        })
    }, [])

    return (

        <div>
            <h1>Clientes Cadastrados</h1> <br></br>

            <div>
                <Tabelacliente cliente={cliente}/>
            </div>

        </div>
        
    )
    
}

export default Verclientes