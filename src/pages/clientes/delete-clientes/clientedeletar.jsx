import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../clientes/clientes.css'



const Deletaclientes = () => {

    //requisição de dados do cliente com atribuição à variavel options.
    const [options, setOptions] = useState([]);

    useEffect(() =>{
        axios.get('https://restaurante-api-m4.herokuapp.com/clientes')
        .then(response => {
            // console.log(response.data)
            setOptions(response.data)
        } )

    }, [])

    //bloco para preenchimento dos campos <p> após seleção do id do cliente
    const [infoCliente, setInfoCliente] = useState ([]);

    //bloco apara deletar o cliente referente ao id selecionado

    function onclick(event){
        event.preventDefault()
        
        let idc = 4
        const deletarcliente = confirm(`Deseja excluir o cliente ID: ${idc}?`)
        
        if(deletarcliente == true){

            axios.delete(`https://restaurante-api-m4.herokuapp.com/clientes/${idc}`)
            .then(response => {
            
                alert('Cliente deletado.')
        })}        
        
    }

    if(options.length===0){
        return null
    }
       
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

            <div className="div-retorno-dados">
            <div><p> Nome: </p></div>
            <div><p> Renato Tadeu Negrelly junior </p></div>
            </div>                
            
            <hr></hr><br></br><br></br>
            
            <div className="div-retorno-dados">
            <div><p> CPF: </p></div>
            <div><p> 13815800765 </p></div>
            </div>                
            
            <hr></hr><br></br><br></br>

            <div className="div-retorno-dados">
            <div><p> Endereço: </p></div>
            <div><p> Rua Nossa Senhora das Dores, 591 - Ilha do Governador, RJ </p></div>
            </div>
            
            <hr></hr><br></br><br></br>
            
            <div className="div-retorno-dados">
            <div><p> Email: </p></div>
            <div><p> renato@gmail.com </p></div>
            </div>
            
            
            <hr></hr><br></br><br></br>

            <div className="div-retorno-dados">
            <div><p> Telefone: </p></div>
            <div><p> 21988888888 </p></div>
            </div>                
            
            <hr></hr><br></br><br></br>

            <button className="btn-cliente" onClick={onclick}>Deletar</button>


        </div>

    )
}

export default Deletaclientes