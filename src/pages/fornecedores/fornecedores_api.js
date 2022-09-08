import axios from 'axios';

export const postFornecedores = async (fornecedores) => {
    const response = await axios.post('https://restaurante-api-m4.herokuapp.com/fornecedores', fornecedores);
  return response.data;
}

export const getFornecedores = async () => {
  const response = await axios.get('https://restaurante-api-m4.herokuapp.com/fornecedores');
  return response.data;
}

export const deleteFornecedores = (id) => {
  return axios.delete(`https://restaurante-api-m4.herokuapp.com/fornecedores/${id}`)
}