import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'

const DeletaCardapio = () => {

  const [cardapio, setCardapio] = useState([])

  useEffect(() => {axios.get('https://restaurante-api-m4.herokuapp.com/cardapio/tudo')
  .then((response) => setCardapio(response.data))
  .catch((e) => e.message)}, [<button/>])

  const Delete = async (id) => {
    await axios.delete(`https://restaurante-api-m4.herokuapp.com/cardapio/delete/${id}`)
    console.log(cardapio)
  }

  return ( 
    <div>
      {
        cardapio.map((item) => {
          return (
            <div>
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
            <button onClick={async () => await Delete(item.id_cardapio)}>Deletar Item</button>
            </div>
          )
        })
      }


    </div>
   );
}
 
export default DeletaCardapio;