import { useState, useContext } from "react";
import axios from "axios";
import { ColaboradorContext } from "../../context/context_colaborador";

import "./FormEditColaboradores.css";

const FormColaboradores = (props) => {

  const { matricula, setMatricula } = useContext(ColaboradorContext)

  const [colaborador, setColaborador] = useState({
    nome_colaborador: "",
    cpf_colaborador: "",
    endereco_colaborador: "",
    cargo_colaborador: "",
    email_colaborador: "",
    telefone_colaborador: "",
    turno_colaborador: "",
    salario_colaborador: "",
    admissao_colaborador: "",
    demissao_colaborador: "",
  });

  const EditaColaborador = async (matricula) => {
    axios.put(`https://restaurante-api-m4.herokuapp.com/colaboradores/${matricula}`, colaborador)
  };

  return (
    <section className="section-form-colaborador">
      <form className="form-edita-colaborador" id="form">
        <input
          type="text"
          placeholder="Nome completo"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              nome_colaborador: event.target.value,
            });
          }}
        />
        <input
          id="input-cpf"
          type="text"
          placeholder="CPF ex.: 000.111.222-33"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              cpf_colaborador: event.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Endereço completo"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              endereco_colaborador: event.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Cargo"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              cargo_colaborador: event.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              email_colaborador: event.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Telefone ex.: (00) 91234-5678"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              telefone_colaborador: event.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Turno"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              turno_colaborador: event.target.value,
            });
          }}
        />
        <input
          type="text"
          placeholder="Salário ex.: R$ 1.234,56"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              salario_colaborador: event.target.value,
            });
          }}
        />
        <input
          id="data"
          type="text"
          placeholder="Data de admissão"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              admissao_colaborador: event.target.value,
            });
          }}
        />
        <input
          id="data"
          type="text"
          placeholder="Data de demissão"
          onChange={(event) => {
            setColaborador({
              ...colaborador,
              demissao_colaborador: event.target.value,
            });
          }}
        />
      </form>
      <div>
        <button type="reset" form="form" id="btn-reset">
          LIMPAR CAMPOS
        </button>

        <button id="btn-send" form="form"
          async onClick={(e) => {
            e.preventDefault();

            const pergunta = confirm(`${colaborador.nome_colaborador} \n Os dados estão corretos?`);

            if (pergunta) {
              alert(`Colaborador cadastrado com sucesso.`);
              EditaColaborador(matricula, colaborador);
            }
          }}
          
        >
          SALVAR ALTERAÇÕES
        </button>
      </div>
    </section>
  );
};

export default FormColaboradores;
