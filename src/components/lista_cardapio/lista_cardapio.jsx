import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'
import { RequisicaoCardapio } from '../../services/requisicoes_cardapio'

import './lista_cardapio.css'

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
    <div className='cardapio'>
      <h2>Esse é o seu cardapio</h2>
        <div className='cardapio_container'>
          <div className='categoria_cardapio'>
            <h3>Pizzas Salgadas</h3>
            <br />
            {
              pizzaSalgada.map((item) => {
                return (
                  <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
                )
              })
            }
          </div>
          <div className='categoria_cardapio'>
            <h3>Pizzas Doces</h3>
            <br />
            {
              pizzaDoce.map((item) => {
                return (
                  <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
                )
              })
            }
          </div>
          <div className='categoria_cardapio'>
            <h3>Bebidas</h3>
            <br />
            {
              bebida.map((item) => {
                return (
                  <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
                )
              })
            }
          </div>
        </div>

    </div>
         
   );
}
 
export default ListaCardapio;