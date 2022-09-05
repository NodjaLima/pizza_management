import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'
import { RequisicaoCardapio } from '../../services/requisicoes_cardapio'
import { DeleteCardapio } from '../../services/requisicoes_cardapio'


const DeletaCardapio = () => {

  const [cardapio, setCardapio] = useState([])

  const getCardapio = async () => {
    const Cardapio = await RequisicaoCardapio()
    setCardapio(Cardapio)
  }

  useEffect(() => {
    getCardapio()
  }, [<button/>])

  
  return ( 
    <div>
      {
        cardapio.map((item) => {
          return (
            <div>
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
            <button onClick={async () => await DeleteCardapio(item.id_cardapio)}>Deletar Item</button>
            </div>
          )
        })
      }


    </div>
   );
}
 
export default DeletaCardapio;