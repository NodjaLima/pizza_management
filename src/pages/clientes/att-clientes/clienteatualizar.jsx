import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import '../../clientes/clientes.css'



const Atualizarclientes = () => {

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

    //bloco para abrir e selecionar novos dados
  
    function onClickNovoInput(event){
        event.preventDefault() 
        const {name} = event.target
        prompt(`Insira as novas informações de ${name} do cliente`)

    }


    //bloco apara deletar o cliente referente ao id selecionado
    function onclickatualiza(event){
        event.preventDefault()        

        let idc = idCliente
        const atualizarcliente = confirm(`Deseja atualizar o cliente ID: ${idc}?`)
        
        if(atualizarcliente == true){

            axios.put(`https://restaurante-api-m4.herokuapp.com/clientes/${idc}`)
            .then(response => {
            
                alert('Cliente atualizado.')
            
            .catch(error => {
                
                alert("Erro ao atualizar usuário.")

            })

        })}        
        
    }

    if(options.length===0){
        return null
    }
       
    return (

        <div>

            <div>
                <h2>Selecione o cliente para atualizar informações.</h2>
            </div><br></br>
            

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
                        <a href='#' name='nome_cliente' onClick={onClickNovoInput}>Editar</a>
                        
                    </div>                
                    
                    <hr></hr><br></br>
                    
                    <div className="div-retorno-dados">
                        <div><p> CPF: </p></div>
                        <div><p> {dadosCliente[0].cpf_cliente} </p></div>
                        <a href='#' name='cpf_cliente' onClick={onClickNovoInput}>Editar</a>
                    </div>                
                    
                    <hr></hr><br></br>

                    <div className="div-retorno-dados">
                        <div><p> Endereço: </p></div>
                        <div><p> {dadosCliente[0].endereco_cliente} </p></div>
                        <a href='#' name='encereco_cliente' onClick={onClickNovoInput}>Editar</a>
                    </div>
                    
                    <hr></hr><br></br>
                    
                    <div className="div-retorno-dados">
                        <div><p> Email: </p></div>
                        <div><p> {dadosCliente[0].email_cliente}  </p></div>
                        <a href='#' name='email_cliente' onClick={onClickNovoInput}>Editar</a>
                    </div>
                                
                    <hr></hr><br></br>

                    <div className="div-retorno-dados">
                        <div><p> Telefone: </p></div>
                        <div><p> {dadosCliente[0].telefone_cliente} </p></div>
                        <a href='#' name='telefone_cliente' onClick={onClickNovoInput}>Editar</a>
                    </div>                
                    
                    <hr></hr><br></br><br></br>

                                    
                </div>     

             }

                                   
            <button className="btn-atualiza" onClick={onclickatualiza}>Atualizar</button>


        </div>

    )
}

export default Atualizarclientes