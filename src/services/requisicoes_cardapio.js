import axios from 'axios';

export const RequisicaoCardapio = () => {
  const retorno = axios.get('https://restaurante-api-m4.herokuapp.com/cardapio/tudo').then((response)=> response.data)
  return retorno
}