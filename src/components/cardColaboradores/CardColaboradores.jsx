import { useState, useEffect } from "react";
import axios from "axios";
import "./CardColaboradores.css";

function CardColaboradores() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://restaurante-api-m4.herokuapp.com/colaboradores")
      .then((response) => {
        setInfo(response.data);
        console.log(response.data);
        console.log(info);
      })
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <div className="div-card-colaboradores">
      {info.map((item) => {
        return (
          <span className="card-colaborador">
            <p>{item.matricula_colaborador}</p>
            <p id="p-nome">{item.nome_colaborador}</p>
            <p>{item.cpf_colaborador}</p>
            <p>{item.endereco_colaborador}</p>
            <p>{item.cargo_colaborador}</p>
            <p>{item.email_colaborador}</p>
            <p>{item.telefone_colaborador}</p>
            <p>{item.turno_colaborador}</p>
            <p>{item.salario_colaborador}</p>
            <p>{item.admissao_colaborador}</p>
            <p>{item.demissao_colaborador}</p>
          </span>
        );
      })}
    </div>
  );
}

export default CardColaboradores;
