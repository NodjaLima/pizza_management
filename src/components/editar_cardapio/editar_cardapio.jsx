import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'

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

  useEffect(() => {axios.get('https://restaurante-api-m4.herokuapp.com/cardapio/tudo')
  .then((response) => setCardapio(response.data))
  .catch((e) => e.message)}, [<button/>])

  const Edit = async (id) => {
    await axios.put(`https://restaurante-api-m4.herokuapp.com/cardapio/${id}`, {
      categoria_cardapio : categoria,
      sabor_cardapio : sabor,
      ingredientes_cardapio : ingredientes,
      tamanho_cardapio : tamanho,
      valor_cardapio : preco
  }).then((response)=> {
    alert('Registro editado com sucesso')
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

