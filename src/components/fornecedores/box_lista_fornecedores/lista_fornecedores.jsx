import axios from "axios";
import { useEffect, useState } from "react";
import { deleteFornecedores } from "../../../pages/fornecedores/fornecedores_api";
import "./lista_fornecedores.css";
import excluir from "../../../assets/img/excluir_fornecedor.png"
import editar from "../../../assets/img/editar_fornecedor.png"

export default function ListaFornecedores (){
  const [info, setInfo] = useState([]);
  const [page, setPage] = useState([])

  useEffect(() => {
    axios.get("https://restaurante-api-m4.herokuapp.com/fornecedores").then((response) => {setInfo(response.data);})
        .catch((erro) => console.log(erro));
  }, [info]);

  return (
    <div className="box-lista">
      <h2 className="titulo">LISTA DOS FORNECEDORES:</h2>
      <table className="lista2">
        <thead>
          <th>Nome</th>
          <th>CNPJ</th>
          <th>Endereço</th>
          <th>Ramo</th>
          <th>Email</th>
          <th>Telefone</th>
        </thead>
        {info.map((item) => {
          return(
            <>
            <tr>
              <td id="lista-nome">{item.nome_fornecedor}</td>
              <td id="lista-cnpj">{item.cnpj_fornecedor}</td>
              <td id="lista-endereço">{item.endereco_fornecedor}</td>
              <td id="lista-ramo">{item.ramo_fornecedor}</td>
              <td id="lista-email">{item.email_fornecedor}</td>
              <td id="lista-telefone">{item.telefone_fornecedor}</td>
           
               <img src={editar}></img>
              
                <a id='excluir-forn' await onClick={async () => {
                  const pergunta = confirm(`Excluir fornecedor ${item.nome_fornecedor}?`)
                  pergunta ? await deleteFornecedores(item.id_fornecedor).then(alert('Fornecedor excluído!')) : alert('Cancelado!')
                  }}><img src={excluir}></img>
                </a>
            </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

