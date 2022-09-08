const FormularioCardapio = (props) => {
  return ( 
    <div className="put-cardapio">
      <h3>Insira as informações para atualizar o item do cardapio</h3>  
      <input className="editar_inp" type='text' placeholder="Categoria" onBlur={props.onBlurCategoria}/>
      <input className="editar_inp" type='text' placeholder="Sabor" onBlur={props.onBlurSabor}/>
      <input className="editar_inp" type='text' placeholder="Ingredientes" onBlur={props.onBlurIngredientes}/>
      <input className="editar_inp" type='text' placeholder="Tamanho" onBlur={props.onBlurTamanho}/>
      <input className="editar_inp" type='text' placeholder="Preço" onBlur={props.onBlurPreco}/>
      <button className="editar_btn" onClick={props.onClick}>{props.label}</button>
    </div>
   );
}
 
export default FormularioCardapio;