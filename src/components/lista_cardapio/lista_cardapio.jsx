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