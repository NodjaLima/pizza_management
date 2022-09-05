import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'
import { RequisicaoCardapio, PutCardapio } from '../../services/requisicoes_cardapio'

import './editar_cardapio.css'

const EditaCardapio = () => {

  const [cardapio, setCardapio] = useState([])
  const [id, setId] = useState()
  const [mostra, setMostra] = useState(true)

  const [categoria, setCategoria] = useState();
  const [sabor, setSabor] = useState();
  const [ingredientes, setIngredientes] = useState();
  const [tamanho, setTamanho] = useState();
  const [preco, setPreco] = useState();

  const getCardapio = async () => {
    const Cardapio = await RequisicaoCardapio()
    setCardapio(Cardapio)
  }
  useEffect(() => {getCardapio()}, [<button/>])

  const Edit = (id) => {
    const put = PutCardapio(id, categoria, sabor, ingredientes,tamanho, preco)
    .then((response) => {
      alert('Regostro editado com sucesso')
      setMostra(true)
    }).catch((e) => {
      alert('Não foi possível alterar o registro. Verifique os campos.')
    })
  }

  
  return ( 
    <div>
      {mostra &&
        cardapio.map((item) => {
          return (
            <div>
            <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio}/>
            <button onClick={(e) => {
              setMostra(false)
              setId(item.id_cardapio)}
            }>Editar Item</button>
            </div>
          )
        })
      }
      {!mostra && 
        <div className="put-cardapio">
        <input className="editar_inp" type='text' placeholder="Categoria" onBlur={(e) => {setCategoria(e.target.value)}}/>
        <input className="editar_inp" type='text' placeholder="Sabor" onBlur={(e) => {setSabor(e.target.value)}}/>
        <input className="editar_inp" type='text' placeholder="Ingredientes" onBlur={(e) => {setIngredientes(e.target.value)}}/>
        <input className="editar_inp" type='text' placeholder="Tamanho" onBlur={(e) => {setTamanho(e.target.value)}}/>
        <input className="editar_inp" type='text' placeholder="Preço" onBlur={(e) => {setPreco(e.target.value)}}/>
        <button className="editar_btn"onClick={async () => await Edit(id)}>Salvar Alterações</button>
      </div>
      }

    </div>
   );
}
 
export default EditaCardapio;

