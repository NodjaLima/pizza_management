import { useEffect, useState } from 'react'
import ItemCardapio from '../item_cardapio/item_cardapio'
import { RequisicaoCardapio, PutCardapio, DeleteCardapio } from '../../services/requisicoes_cardapio'

import './lista_cardapio.css'
import FormularioCardapio from '../form_cardapio/form_cardapio'

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
    const confirma = confirm("Deseja excluir o item permanentemente?")
    
    if(confirma == true) {
      await DeleteCardapio(id)
    .then(
      alert('Item deletado com sucesso')
    )
    getCardapio()
    }
    else {
      alert('não foi possível deletar o item')
    }
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
                    await deleteCardapio(item.id_cardapio)}
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
                    await deleteCardapio(item.id_cardapio)}} 
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
                    await deleteCardapio(item.id_cardapio)}} 
                    editar={()=>{
                      setEdit(true)
                      setId(item.id_cardapio)}}/>
                  )
                })
              }
            </div>
          </div>}

        {edit && <FormularioCardapio onBlurCategoria={(e) => {setItem({...item, categoria_cardapio: e.target.value})}} onBlurSabor={(e) => {setItem({...item, sabor_cardapio: e.target.value})}} onBlurIngredientes={(e) => {setItem({...item, ingredientes_cardapio: e.target.value})}} onBlurTamanho={(e) => {setItem({...item, tamanho_cardapio: e.target.value})}} onBlurPreco={(e) => {setItem({...item, valor_cardapio: e.target.value})}} onClick={(e) => Edit(id)} label={'Salvar Alterações'}/>}
        

    </div>
         
   );
}
 
export default ListaCardapio;

