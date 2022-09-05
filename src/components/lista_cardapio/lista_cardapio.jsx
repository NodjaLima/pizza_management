import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'
import { RequisicaoCardapio } from '../../services/requisicoes_cardapio'

const ListaCardapio = () => {

  const [cardapio, setCardapio] = useState([])

  const getCardapio = async () => {
    const Cardapio = await RequisicaoCardapio()
    setCardapio(Cardapio)
  }

  useEffect(() => {
    getCardapio()
  }, [])

  const pizzaSalgada = cardapio.filter((item) => item.categoria_cardapio === 'Pizza Salgada')
  const pizzaDoce = cardapio.filter((item) => item.categoria_cardapio === 'Pizza Doce')
  const bebida = cardapio.filter((item) => item.categoria_cardapio === 'Bebida')

  
  return ( 
    <div>
      <h3>Esse é o seu cardapio</h3>
      <br />
      <h2>Pizzas Salgadas</h2>
      <br />
      {
        pizzaSalgada.map((item) => {
          return (
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
          )
        })
      }
      <h2>Pizzas Doces</h2>
      <br />
      {
        pizzaDoce.map((item) => {
          return (
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
          )
        })
      }
      <h2>Bebidas</h2>
      <br />
      {
        bebida.map((item) => {
          return (
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
          )
        })
      }


    </div>
         
   );
}
 
export default ListaCardapio;