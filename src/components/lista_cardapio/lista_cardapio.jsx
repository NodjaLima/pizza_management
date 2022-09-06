import { useEffect, useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'
import { RequisicaoCardapio, PutCardapio, DeleteCardapio } from '../../services/requisicoes_cardapio'

import './lista_cardapio.css'

const ListaCardapio = () => {

  const [cardapio, setCardapio] = useState([])
  const [item, setItem] = useState({
    categoria_cardapio : "",
    sabor_cardapio : "",
    ingredientes_cardapio: "",
    tamanho_cardapio : "",
    valor_cardapio : ""
  })
  const [edit, setEdit] = useState(false)
  const [id, setId] = useState()

  const getCardapio = async () => {
    const Cardapio = await RequisicaoCardapio()
    setCardapio(Cardapio)
  }

  useEffect(() => {
    getCardapio()
  }, [cardapio])

  const deleteCardapio = async (id) => {
    await DeleteCardapio(id)
    getCardapio()
    }

  const Edit = (id) => {
    const put = PutCardapio(id, item)
    .then((response) => {
      alert('Registro editado com sucesso')
      setEdit(false)
      }).catch((e) => {
        alert('Não foi possível alterar o registro. Verifique os campos.')
      })
  }

  const categoria = (valor) => cardapio.filter((item) => item.categoria_cardapio === valor)
    
  return ( 
    <div className='cardapio'>
        <h2>Esse é o seu cardapio</h2>
          {!edit && <div className='cardapio_container'>
            <div className='categoria_cardapio'>
              <h3>Pizzas Salgadas</h3><hr/>

              <br />
              {
                categoria("Pizza Salgada").map((item) => {
                  return (
                    <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio} deletar={async () => {
                    await DeleteCardapio(item.id_cardapio)}
                    } editar={()=>{
                      setEdit(true)
                      setId(item.id_cardapio)}} />
                  )
                })
              }
            </div>
            <div className='categoria_cardapio'>
              <h3>Pizzas Doces</h3><hr />
              <br />
              {
                categoria("Pizza Doce").map((item) => {
                  return (
                    <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio} deletar={async () => {
                    await DeleteCardapio(item.id_cardapio)}} 
                    editar={()=>{
                      setEdit(true)
                      setId(item.id_cardapio)}}/>
                  )
                })
              }
            </div>
            <div className='categoria_cardapio'>
              <h3>Bebidas</h3><hr />
              <br />
              {
                categoria("Bebida").map((item) => {
                  return (
                    <ItemCardapio nome={item.sabor_cardapio} ingredientes={item.ingredientes_cardapio} tamanho={item.tamanho_cardapio} valor={item.valor_cardapio} deletar={async () => {
                    await DeleteCardapio(item.id_cardapio)}} 
                    editar={()=>{
                      setEdit(true)
                      setId(item.id_cardapio)}}/>
                  )
                })
              }
            </div>
          </div>}

        {edit && 
        <div className="put-cardapio">
          <h3>Insira as informações para atualizar o item do cardapio</h3>  
          <input className="editar_inp" type='text' placeholder="Categoria" onBlur={(e) => {setItem({...item, categoria_cardapio: e.target.value})}}/>
          <input className="editar_inp" type='text' placeholder="Sabor" onBlur={(e) => {setItem({...item, sabor_cardapio: e.target.value})}}/>
          <input className="editar_inp" type='text' placeholder="Ingredientes" onBlur={(e) => {setItem({...item, ingredientes_cardapio: e.target.value})}}/>
          <input className="editar_inp" type='text' placeholder="Tamanho" onBlur={(e) => {setItem({...item, tamanho_cardapio: e.target.value})}}/>
          <input className="editar_inp" type='text' placeholder="Preço" onBlur={(e) => {setItem({...item, valor_cardapio: e.target.value})}}/>
          <button className="editar_btn" onClick={(e) => Edit(id)}>Salvar Alterações</button>
      </div>
      }

    </div>
         
   );
}
 
export default ListaCardapio;