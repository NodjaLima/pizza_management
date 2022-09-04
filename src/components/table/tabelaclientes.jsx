import React from "react";
import './tabela.css';


const Tabela = ({clientes}) => {

    const Linha = ({linha}) => {
        const chave = Object.keys(linha)
        return(
            <tr key={linha.id}>
                {
                    chave.map(key => <td key={chave}>{linha[key]}</td>)                
                }                
            </tr>
        )
    }

    const atributo = Object.keys(clientes[0])

    return(
        <div>
            <table>

                <thead>                    
                    <tr>
                        {atributo.map(chave => <th key={atributo}>{chave}</th> )}                        
                    </tr>
                </thead>


                
                <tbody>
                    {clientes.map(linha => <Linha linha={linha}/>)}
                </tbody>

            </table>
        </div>
    )
}

export default Tabela