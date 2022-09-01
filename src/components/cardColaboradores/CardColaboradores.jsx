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
            <h3>{item.nome_colaborador}</h3>
            <h1>{`Endereço: ${item.endereco_colaborador}`}</h1>
            <h1>{`Cargo: ${item.cargo_colaborador}`}</h1>
            <h1>{`Email: ${item.email_colaborador}`}</h1>
            <h1>{`Salário: ${item.salario_colaborador}`}</h1>
          </span>
        );
      })}
    </div>
  );
}

export default CardColaboradores;
