import { useState } from 'react'
import InserirCardapio from '../../components/inserir_cardapio/inserir_cardapio';
import ListaCardapio from "../../components/lista_cardapio/lista_cardapio";
import CardapioInicial from  '../../components/cardapio_inicial/cardapio_inicial';

import './cardapio.css'
import PesquisaCardapio from '../../components/pesquisa_cardapio/pesquisa_cardapio';

const Cardapio = () => {
  const [pesquisaCardapio, setPesquisaCardapio] = useState(false)
  const [mostraCardapio, setMostraCardapio] = useState(false)
  const [inserirCardapio, setInserirCardapio] = useState(false)
  const [inicio, setInicio] = useState(true)


  return ( 
    <div className="cardapio-container">
      
      <h1>GERENCIE O SEU CARDÁPIO</h1>

      <div className='cardapio-botoes'>
      <button className='btn' onClick={()=>{
        setMostraCardapio(true)
        setInserirCardapio(false)
        setPesquisaCardapio(false)
        setInicio(false)}
        }>Vizualizar</button>
      <button className='btn'onClick={()=>{
        setMostraCardapio(false)
        setInserirCardapio(true)
        setPesquisaCardapio(false)
        setInicio(false)}
        }>Inserir</button>
      <button className='btn'onClick={()=>{
        setMostraCardapio(false)
        setInserirCardapio(false)
        setPesquisaCardapio(true)
        setInicio(false)}
        }>Pesquisar</button>
      
      </div>
      
      {inicio && <CardapioInicial />}
      {mostraCardapio && <ListaCardapio />}
      {inserirCardapio && <InserirCardapio />}
      {pesquisaCardapio && <PesquisaCardapio />}

    </div>
    
   );
}
 
export default Cardapio;