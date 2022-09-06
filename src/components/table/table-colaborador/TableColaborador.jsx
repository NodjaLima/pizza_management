import { useEffect, useState } from "react";
import axios from "axios";
import "./TabelaColaboradores.css";
import editar from '../../../assets/img/editar-icone50.png'
import excluir from '../../../assets/img/excluir-icone50.png'

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
          <th>Ações</th>
        </thead>
        {info.map((item) => {
          return(
            <>
            <tr>
              <td id="td-id">{item.matricula_colaborador}</td>
              <td id="td-nome">{item.nome_colaborador}</td>
              <td id="td-cpf">{item.cpf_colaborador}</td>
              <td id="td-end">{item.endereco_colaborador}</td>
              <td>{item.cargo_colaborador}</td>
              <td id="td-email">{item.email_colaborador}</td>
              <td id="td-tel">{item.telefone_colaborador}</td>
              <td>{item.turno_colaborador}</td>
              <td id="td-sal">{item.salario_colaborador}</td>
              <td>{item.admissao_colaborador}</td>
              <td>{item.demissao_colaborador}<div></div></td>
              <div id="td-utils">
                <a id='td-a1'><img src={editar}></img></a>
                <a id='td-a2'><img src={excluir}></img></a>
              </div>
              </tr>
              </>
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
//4- Criamos um propriedade no componente tabela para receber os items
//5- Criamos um map dentro do componente tabela para exibir usuário por usuário na tabela
