import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../clientes/clientes.css'



const Deletaclientes = () => {



    const [options, setOptions] = useState([]);

    useEffect(() =>{
        axios.get('https://restaurante-api-m4.herokuapp.com/clientes')
        .then(response => {
            // console.log(response.data)
            setOptions(response.data)
        } )

    }, [])

    if(options.length===0){
        return null
    }

    // const ids = Object.values(options[0])
    // // console.log(ids)
    // console.log(options[0].id_cliente)
        
    return (

        <div>

            <div>
                <h2>Selecione o cliente para deletá-lo do banco</h2>
            </div><br></br><br></br><br></br>
            

            <p>
                <label>ID cliente: 
                    <select>

                        <option>Selecione</option>

                        {options.map((id, index) =>{
                             return(
                                <option key={index} value={id.id_cliente}>
                                    {id.id_cliente}
                                </option>
                                  // console.log(id.id_cliente)
                             )
                              
                            })}                    
                    </select>
                </label>

            </p><br></br><br></br><br></br>


            <p>Nome: </p>
            <hr></hr><br></br><br></br>

            <p>CPF: </p>
            <hr></hr><br></br><br></br>

            <p>Endereço: </p>
            <hr></hr><br></br><br></br>

            <p>Email: </p>
            <hr></hr><br></br><br></br>

            <p>Telefone: </p>
            <hr></hr><br></br><br></br>

            <button className="btn-cliente">Deletar</button>


        </div>

    )
}

export default Deletaclientes