import axios from 'axios';

export const RequisicaoColaboradores = () => {
  return axios.get('https://restaurante-api-m4.herokuapp.com/colaboradores').then((response)=> response.data)
}

export const CriaColaborador = (colaborador) => {
    return axios.post('https://restaurante-api-m4.herokuapp.com/colaboradores', colaborador).then((response)=> response.data)
}

export const ExcluiColaborador = (matricula) => {
  return axios.delete(`https://restaurante-api-m4.herokuapp.com/colaboradores/:${matricula}`)
}