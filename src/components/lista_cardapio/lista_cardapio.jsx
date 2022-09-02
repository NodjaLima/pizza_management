import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'

const ListaCardapio = () => {

  const [cardapio, setCardapio] = useState([])

  useEffect(() => {axios.get('https://restaurante-api-m4.herokuapp.com/cardapio/tudo')
  .then((response) => setCardapio(response.data))
  .catch((e) => e.message)}, [])

  
  return ( 
    <div>
      {
        cardapio.map((item) => {
          return (
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
          )
        })
      }


    </div>
         
   );
}
 
export default ListaCardapio;