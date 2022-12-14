import { useEffect, useState } from "react";
import editar from "../../../assets/img/editar-icone50.png";
import excluir from "../../../assets/img/excluir-icone50.png";
import { GetColaboradores, ExcluiColaborador } from "../../../services/requisicoes_colaboradores";
import FormEditColaboradores from "../../formColaboradores/FormEditColaboradores";
import { useContext } from "react";
import { ColaboradorContext } from "../../../context/context_colaborador";
import "./TabelaColaboradores.css";

export const TabelaColaboradores = () => {

  const {matricula, setMatricula} = useContext(ColaboradorContext)

  const [info, setInfo] = useState([]);
  const [page, setPage] = useState([]);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    GetColaboradores()
      .then((response) => {
        setInfo(response.data);
        setPage(response.data);
      })
      .catch((erro) => console.log(erro));
  }, [page]);

  return (
    <>
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
            return (
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
                  <td>{item.demissao_colaborador}</td>
                  <div id="td-utils">

                    <a
                      id="td-a1"
                      onClick={async () => {
                        const pergunta = confirm(`Deseja alterar os dados do colaborador ${item.nome_colaborador}?`);

                        if (pergunta) {
                          setEdit(true);
                          setMatricula(item.matricula_colaborador);
                        }
                      }}
                    >
                      <img src={editar}></img>
                    </a>

                    <a
                      id="td-a2"
                      await
                      onClick={async () => {
                        const pergunta = confirm(
                          `Deseja excluir os dados do colaborador ${item.nome_colaborador}?`
                        );
                        pergunta
                          ? ExcluiColaborador(item.matricula_colaborador).then(
                              alert("Colaborador excluído com sucesso.")
                            )
                          : alert("Exclusão cancelada.");
                      }}
                    >
                      <img src={excluir}></img>
                    </a>
                  </div>
                </tr>
              </>
            );
          })}
        </table>
        <div className="form-table-edit">
          {edit && <FormEditColaboradores />}
        </div>
      </div>
    </>
  );
};
