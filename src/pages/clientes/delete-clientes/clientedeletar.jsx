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
            
            setOptions(response.data)
        } )

    }, [])

    //bloco para preenchimento dos campos <p> após seleção do id do cliente
    const [idCliente, setIdCliente] = useState(1);
    const [dadosCliente, setDadosCliente] = useState([]);

    function onChange(event){
        
        setIdCliente(event.target.value)

        const infocliente = options.filter((item) =>{
            return item.id_cliente === Number(event.target.value)
            
        })
        
        setDadosCliente(infocliente)
        
    }
    
    //bloco apara deletar o cliente referente ao id selecionado
    function onclick(event){
        event.preventDefault()
        

        let idc = idCliente
        const deletarcliente = confirm(`Deseja excluir o cliente ID: ${idc}?`)
        
        if(deletarcliente == true){

            axios.delete(`https://restaurante-api-m4.herokuapp.com/clientes/${idc}`)
            .then(response => {
            
                alert('Cliente deletado.')
            
            .catch(error => {
                
                alert("Erro ao deletar usuário.")

            })

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
                    <select onChange={(event) => {onChange(event)}}>

                        <option>Selecione</option>

                        {options.map((id, index) =>{
                                return(
                                    <option key={index} value={id.id_cliente}>
                                        {id.id_cliente}
                                    </option>                                    
                                )                              
                            })}
                    </select>
                </label>

            </p><br></br><br></br>
             
             { dadosCliente.length > 0 && 
             
                <div >
                    <div className="div-retorno-dados">
                    <div><p> Nome: </p></div>
                    <div><p> {dadosCliente[0].nome_cliente} </p></div>
                    </div>                
                    
                    <hr></hr><br></br>
                    
                    <div className="div-retorno-dados">
                    <div><p> CPF: </p></div>
                    <div><p> {dadosCliente[0].cpf_cliente} </p></div>
                    </div>                
                    
                    <hr></hr><br></br>

                    <div className="div-retorno-dados">
                    <div><p> Endereço: </p></div>
                    <div><p> {dadosCliente[0].endereco_cliente} </p></div>
                    </div>
                    
                    <hr></hr><br></br>
                    
                    <div className="div-retorno-dados">
                    <div><p> Email: </p></div>
                    <div><p> {dadosCliente[0].email_cliente}  </p></div>
                    </div>
                                
                    <hr></hr><br></br>

                    <div className="div-retorno-dados">
                    <div><p> Telefone: </p></div>
                    <div><p> {dadosCliente[0].telefone_cliente} </p></div>
                    </div>                
                    
                    <hr></hr><br></br><br></br>

                                    
                </div>     

             }

                                   
            <button className="btn-cliente" onClick={onclick}>Deletar</button>


        </div>

    )
}

export default Deletaclientes