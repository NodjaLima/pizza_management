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
  }, [page]);

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
              <td id="td-nome">{item.nome_fornecedores}</td>
              <td id="td-cnpj">{item.cnpj_fornecedores}</td>
              <td id="td-endereço">{item.endereco_fornecedores}</td>
              <td id="td-ramo">{item.ramo_fornecedores}</td>
              <td id="td-email">{item.email_fornecedores}</td>
              <td id="td-telefone">{item.telefone_fornecedores}</td>
           
               <img src={editar}></img>
              
                <a id='td-a2' await onClick={async () => {
                  const pergunta = confirm(`Excluir fornecedor ${item.nome_fornecedores}?`)
                  pergunta ? await deleteFornecedores(item.ramo_fornecedores).then(alert('Fornecedor excluído!')) : alert('Cancelado!')
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

