import { useState } from 'react'
import DeletaCardapio from '../../components/deletar_cardapio/deletar_cardapio';
import EditaCardapio from '../../components/editar_cardapio/editar_cardapio';
import InserirCardapio from '../../components/inserir_cardapio/inserir_cardapio';
import ListaCardapio from "../../components/lista_cardapio/lista_cardapio";

import './cardapio.css'

const Cardapio = () => {
  const [mostraCardapio, setMostraCardapio] = useState(false)
  const [editarCardapio, setEditarCardapio] = useState(false)
  const [inserirCardapio, setInserirCardapio] = useState(false)
  const [deletarCardapio, setDeletarCardapio] = useState(false)


  return ( 
    <div className="cardapio-container">
      
      <h1>GERENCIE O SEU CARDÁPIO</h1>

      <div className='cardapio-botoes'>
      <button onClick={()=>{
        setMostraCardapio(true)
        setEditarCardapio(false)
        setInserirCardapio(false)
        setDeletarCardapio(false)}
        }>Vizualizar</button>
      <button onClick={()=>{
        setMostraCardapio(false)
        setEditarCardapio(false)
        setInserirCardapio(true)
        setDeletarCardapio(false)}
        }>Inserir</button>
      <button onClick={()=>{
        setMostraCardapio(false)
        setEditarCardapio(true)
        setInserirCardapio(false)
        setDeletarCardapio(false)}
        }>Editar</button>
      <button onClick={()=>{
        setMostraCardapio(false)
        setEditarCardapio(false)
        setInserirCardapio(false)
        setDeletarCardapio(true)}
        }>Deletar</button>
      </div>
      
      {mostraCardapio && <ListaCardapio />}
      {inserirCardapio && <InserirCardapio />}
      {deletarCardapio && <DeletaCardapio />}
      {editarCardapio && <EditaCardapio />}

    </div>
    
   );
}
 
export default Cardapio;