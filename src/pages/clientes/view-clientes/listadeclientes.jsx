import React from "react";

const Listadeclientes = ({clientes}) =>{

    return(

        <div>

            <h2>Clientes Cadastrados:</h2>

            {   clientes.length > 0 ? (
                clientes.map((cliente) => (
                    <p>{
                        ([  cliente.nome,
                            cliente.cpf,
                            cliente.endereco,
                            cliente.email,
                            cliente.telefone
                        ])

                    }</p>
                ))
            ):(
                <p>Não existem clientes cadastrados.</p>
            )}
            

        </div>

    )


}

export default Listadeclientes