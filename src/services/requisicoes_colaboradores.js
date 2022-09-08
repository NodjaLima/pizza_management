import axios from "axios";

export const GetColaboradores = () => {
  return axios.get("https://restaurante-api-m4.herokuapp.com/colaboradores")
};

export const CriaColaborador = (colaborador) => {
  return axios.post("https://restaurante-api-m4.herokuapp.com/colaboradores", colaborador)
};

export const EditaColaborador = async (matricula, colaborador) => {
  return axios.put(`https://restaurante-api-m4.herokuapp.com/colaboradores/${matricula}`, colaborador)
};

export const ExcluiColaborador = async (matricula) => {
  return axios.delete(`https://restaurante-api-m4.herokuapp.com/colaboradores/${matricula}`)
};
