import axios from "axios";
import { useEffect, useState } from "react";
import "./lista_fornecedores.css";

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
            </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

