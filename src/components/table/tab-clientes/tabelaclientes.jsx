import React from "react";

import '../tabela.css';


const Row = ({ record }) => {

    const keys = Object.keys(record)

    return(

        <tr key={record.id_cliente}>
            {
                keys.map((key) => <td key={key}>{record[key]}</td>)
            }            
        </tr> 
    )
}


const Tabela = ({ cliente }) => {

    const keys = Object.keys(cliente[0])

    return(
        <div>
            <table>

                <thead>                    
                    <tr>
                        {keys.map((key) => <th key={key}>{key}</th>)}
                    </tr>
                </thead>


                
                <tbody>
                    {cliente.map((record) => <Row record={record}/>)}                   
                </tbody>

            </table>
        </div>
    )
}

export default Tabela