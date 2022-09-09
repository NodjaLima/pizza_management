import axios from "axios";
import { useState, useEffect } from "react";
import './box_fornecedores.css'

export default function BoxFornecedores() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://restaurante-api-m4.herokuapp.com/fornecedores").then((response) => {setInfo(response.data);
        console.log(response.data);
        console.log(info);
      })
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <div className="box-principal-fornecedores">
      {info.map((item) => {
        return (
          <span className="itens-fornecedores">
            <p id="nome-fornecedor">{item.nome_fornecedores}</p>
            <p id="cnpj-fornecedor">{item.cnpj_fornecedores}</p>
            <p id="endereço-fornecedor">{item.endereco_fornecedores}</p>
            <p id="ramo-fornecedor">{item.ramo_fornecedores}</p>
            <p id="email-fornecedor">{item.email_fornecedores}</p>
            <p id="telefone-fornecedor">{item.telefone_fornecedores}</p>
          </span>
        );
      })}
    </div>
  );
}

