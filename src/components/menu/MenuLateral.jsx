import { useState } from 'react';
import './MenuLateral.css';

const MenuContainer = (props) => {
    const [listar, setListar] = useState(false);

    return(
        <ul className='lista-menu-container-colaboradores'>
            <a onClick={props.onClickListar}><li>Listar</li></a>
            <a onClick={props.onClickCadastrar}><li>Cadastrar</li></a>
        </ul>
    )
}

export default MenuContainer;