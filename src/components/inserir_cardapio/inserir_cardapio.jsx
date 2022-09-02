import { useState } from 'react';
import { PostCardapio } from '../../services/requisicoes_cardapio'

import './inserir_cardapio.css'

const InserirCardapio = () => {

  const [categoria, setCategoria] = useState();
  const [sabor, setSabor] = useState();
  const [ingredientes, setIngredientes] = useState();
  const [tamanho, setTamanho] = useState();
  const [preco, setPreco] = useState();
  const [mostra, setMostra] = useState(true)

  const post = () => {
    const send = PostCardapio(categoria, sabor, ingredientes,tamanho, preco)
    .then((response) => {
      setMostra(false)
    }).catch((e) => {
      alert('Não foi possível cadastrar o item. Verifique os dados e tente novamente.')
    })
  }

  return ( 
    <>
    {mostra && 
      <div className="post_cardapio">
        <input className="inserir_inp" type='text' placeholder="Categoria" onBlur={(e) => {setCategoria(e.target.value)}}/>
        <input className="inserir_inp" type='text' placeholder="Sabor" onBlur={(e) => {setSabor(e.target.value)}}/>
        <input className="inserir_inp" type='text' placeholder="Ingredientes" onBlur={(e) => {setIngredientes(e.target.value)}}/>
        <input className="inserir_inp" type='text' placeholder="Tamanho" onBlur={(e) => {setTamanho(e.target.value)}}/>
        <input className="inserir_inp" type='text' placeholder="Preço" onBlur={(e) => {setPreco(e.target.value)}}/>
        <button className="Cadatrar_btn" onClick={post}>Cadastrar Item</button>
      </div>
    }

    {!mostra && 
    <div>
    <h3>Item inserido com sucesso!</h3>
    <button onClick={()=> {setMostra(true)}}>Cadastrar Novo Item</button>
    </div> 
    }
    </>
   );
}
 
export default InserirCardapio;