import './loginComponent.css'

const LoginComponent = (props) => {
  return ( 
    <div className='login_container'>
      <form className="form_login">
        <input className='login_inp' placeholder="Usuário" onBlur={props.onBlurUsuario}/>
        <input className='login_inp' placeholder="Senha" onBlur={props.onBlurSenha}/>
        <button type='button' onClick={props.onClick}>{props.label}</button>
      </form> 
    </div>
  );
}
 
export default LoginComponent;