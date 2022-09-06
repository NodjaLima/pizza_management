import { useEffect, useState } from "react";
import axios from "axios";
import "./TabelaColaboradores.css";

const TabelaColaboradores = (props) => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://restaurante-api-m4.herokuapp.com/colaboradores")
      .then((response) => {
        setInfo(response.data);
      })
      .catch((erro) => console.log(erro));
  }, []);

  return (
    <div className="container-tabela-colaboradores">
      <table className="tabela-colaboradores">
        <thead>
          <th>Matrícula</th>
          <th>Nome</th>
          <th>CPF</th>
          <th>Endereço</th>
          <th>Cargo</th>
          <th>Email</th>
          <th>Telefone</th>
          <th>Turno</th>
          <th>Salário</th>
          <th>Admissão</th>
          <th>Demissão</th>
        </thead>
        {info.map((user) => {
          return (
            <tr>
              <td id="td-id">{user.matricula_colaborador}</td>
              <td id="td-nome">{user.nome_colaborador}</td>
              <td id="td-cpf">{user.cpf_colaborador}</td>
              <td id="td-end">{user.endereco_colaborador}</td>
              <td>{user.cargo_colaborador}</td>
              <td id="td-email">{user.email_colaborador}</td>
              <td id="td-tel">{user.telefone_colaborador}</td>
              <td>{user.turno_colaborador}</td>
              <td id="td-sal">{user.salario_colaborador}</td>
              <td>{user.admissao_colaborador}</td>
              <td>{user.demissao_colaborador}</td>
              {/* <td>
              <Link to={`/editar-usuario/${user.id}`}>Editar</Link>-
              <a
                onClick={(e) => {
                  e.preventDefault();
                  props.onDelete(user.id);
                }}
                href="#"
              >
                Deletar
              </a>
            </td> */}
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TabelaColaboradores;

//1- Função para fazer a requisição para o backend usando axios.
//2- Chamamos a função no componente Home.jsx dentro do useEffect
//3- Dentro do then pegamos os dados da requisição e colocamos no state.
//4- Criamos um propriedade no componente tabela para receber os users
//5- Criamos um map dentro do componente tabela para exibir usuário por usuário na tabela
