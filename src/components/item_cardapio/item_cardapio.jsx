const ItemCardapio = (props) => {
  return ( 
    <div>
      <h4>{props.nome}</h4>
      <p>Ingredientes: {props.ingredientes}</p>
      <p>Tamanho: {props.tamanho}</p>
      <p>Valor: {props.valor}</p>
    </div>
   );
}
 
export default ItemCardapio;