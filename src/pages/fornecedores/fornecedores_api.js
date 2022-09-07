import axios from 'axios';

export const postFornecedores = (fornecedores) => {
    return axios.post('https://restaurante-api-m4.herokuapp.com/fornecedores', fornecedores).then((response)=> response.data)
}

export const getFornecedores = () => {
  return axios.get('https://restaurante-api-m4.herokuapp.com/fornecedores').then((response)=> response.data)
}

export const deleteFornecedores = (id) => {
  return axios.delete(`https://restaurante-api-m4.herokuapp.com/fornecedores/${id}`)
}