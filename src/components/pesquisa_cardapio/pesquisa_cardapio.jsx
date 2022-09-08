import { PesquisaCardapioPorCategoria } from '../../services/requisicoes_cardapio'
import { useState } from 'react'
import './pesquisa_cardapio.css'

const PesquisaCardapio = () => {

  const [pesquisa, setPesquisa] = useState()
  const [select, setSelect] = useState()
  const [inputValue, setInputValue] = useState()
  const list = [
    {id: 0, name: 'Selecione'},
    {id: 1, name: 'categoria'},
    {id: 2, name: 'sabor'},
    
  ];
  const [mostraPesquisa, setMostraPesquisa] = useState(false)

  const Pesquisar = (parametro, valor) => {
    PesquisaCardapioPorCategoria(parametro, valor)
    .then((response) => {
      setPesquisa(response.data)
      setMostraPesquisa(true)})
    .catch((e) => { alert('não foi encontrado nenhum item com os parametros pesquisados')})
  }

  return ( 
    <div className='pesquisa-container'>
      <div className='pesquisar'>
        <select onChange={(e)=> {setSelect(e.target.value)}} value={select}>
          {list.map((item, index) => (
          <option value={item.name}>{item.name}</option>
        ))}    
        </select>
          <input type="text" onBlur={(e)=>{setInputValue(e.target.value)}}/>
          <button className='btn-pesquisar' onClick={()=> {
            Pesquisar(select, inputValue)
          }}>Pesquisar</button>
      </div>

      {mostraPesquisa && pesquisa.map((item) => { 
        return (
          <div>
            <div className='item-cardapio-container'>
              <h4>{item.sabor_cardapio}</h4>
              <br />
              <p>Ingredientes: {item.ingredientes_cardapio}</p>
              <p>Tamanho: {item.tamanho_cardapio}</p>
              <p>Valor: {item.valor_cardapio}</p>
            </div>
          </div>
        )

      })}

    </div>
   );
}
 
export default PesquisaCardapio;