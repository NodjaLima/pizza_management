import React from "react";
import './clientes.css'
import { useState } from "react";


const valorInicial = {

    nome_cliente: "",
    cpf_cliente: "",
    endereco_cliente: "",
    email_cliente: "",
    telefone_cliente: ""
}


const Formcadastro = () =>{

    const [values, setValues] = useState(valorInicial);

    function onChange(event) {
        
        const {name, value} = event.target

        // console.log({name, value})        

        setValues({...values, [name]: value});

        console.log(values)
    }


    return (
        
        <div className="form-cliente-cadastro">
            <h3>Cadastro de clientes</h3><br></br><br></br>

            <form>
                <label>Nome completo: 
                    <input type="text" name='nome_cliente' onChange={onChange}></input>
                </label><br></br>
                <label>CPF: 
                    <input type="text" name='cpf_cliente' onChange={onChange}></input>
                </label><br></br>
                <label>Endereço: 
                    <input type="text" name='endereco_cliente' onChange={onChange}></input>
                </label><br></br>
                <label>Email: 
                    <input type="text" name='email_cliente' onChange={onChange}></input>
                </label><br></br>
                <label>Telefone: 
                    <input type="text" name='telefone_cliente' onChange={onChange}></input>
                </label><br></br>

                <button className="btn-cliente">Cadastrar</button>

            </form>
        </div>
    )

}

export default Formcadastro