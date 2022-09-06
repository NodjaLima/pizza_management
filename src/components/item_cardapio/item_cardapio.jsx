import './item_cardapio.css'

const ItemCardapio = (props) => {
  return ( 
    <div>
      <h4>{props.nome}</h4>
        <div className='item-cardapio-container'>
        <div className='texto-item-cardapio'>
          <p>Ingredientes: {props.ingredientes}</p>
          <p>Tamanho: {props.tamanho}</p>
          <p>Valor: {props.valor}</p>
        </div>
        <div className='botoes-item'>
          <button className='btn-item' onClick={props.editar}>Editar</button>
          <button className='btn-item' onClick={props.deletar}>Deletar</button>
        </div>
        </div>
    </div>
   );
}
 
export default ItemCardapio;