import axios from "axios";
import { useState } from 'react';
import './inserir_cardapio.css'

const InserirCardapio = () => {

  const [categoria, setCategoria] = useState();
  const [sabor, setSabor] = useState();
  const [ingredientes, setIngredientes] = useState();
  const [tamanho, setTamanho] = useState();
  const [preco, setPreco] = useState();
  const [mostra, setMostra] = useState(true)


  const post = async () => {
    await axios.post('https://restaurante-api-m4.herokuapp.com/cardapio/novo', {
      categoria_cardapio : categoria,
      sabor_cardapio : sabor,
      ingredientes_cardapio : ingredientes,
      tamanho_cardapio : tamanho,
      valor_cardapio : preco
  }).then((response) => {
    setMostra(false)
  }).catch((e)=>{
    alert("Não foi possível inserir o novo item. Verifica as informações do cadastro e tente novamente")
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