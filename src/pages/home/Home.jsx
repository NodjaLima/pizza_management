import { LoginContext } from '../../context/context_login'
import { React, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Login from '../login/login';
import './home.css'


const Home = () => {

  const [loading , setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }, []);

  const { usuario, setUsuario } = useContext(LoginContext)
  const navigate = useNavigate()

  return (
    <div className='mother'>
            {
                loading ? 
                <div className='loading'>
                    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                </div>
                : 
    <div>
      <Login />
    </div>}
    </div>
   );
}
 
export default Home;