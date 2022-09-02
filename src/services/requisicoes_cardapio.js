import axios from 'axios';

export const RequisicaoCardapio = () => {
  const retorno = axios.get('https://restaurante-api-m4.herokuapp.com/cardapio/tudo').then((response)=> response.data)
  return retorno
}

export const PostCardapio = (categoria, sabor, ingredientes, tamanho, preco) => {
  const post = axios.post('https://restaurante-api-m4.herokuapp.com/cardapio/novo', {
      categoria_cardapio : categoria,
      sabor_cardapio : sabor,
      ingredientes_cardapio : ingredientes,
      tamanho_cardapio : tamanho,
      valor_cardapio : preco
  })
  return post
}