import { useState } from 'react';
import './boxMenu.css';

const BoxMenu = (props) => {
    const [exibir, setExibir] = useState(false);
    return(
        <div className='box-menu'>
            <a onClick={props.onClickExibir}><li className="btn1">EXIBIR</li></a>
            <a onClick={props.onClickInserir}><li className="btn2">INSERIR</li></a>
        </div>
    )
}

export default BoxMenu;