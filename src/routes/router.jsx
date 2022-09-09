import { BrowserRouter } from 'react-router-dom'
import Header from '../components/header/Header.jsx'
import { LoginProvider } from '../context/context_login.jsx'
import { ColaboradorProvider } from '../context/context_colaborador.jsx'
import { AppRoutes } from './routes.jsx'


export default function Router() {


    return (
        <LoginProvider>
          <ColaboradorProvider>
          <BrowserRouter>
            <Header />
              <AppRoutes />
          </BrowserRouter>
          </ColaboradorProvider>
        </LoginProvider>
    )
}

// CRIAR ANIMAÇÃO NA HOME;
// MENU DA NAVBAR SUPERIOR;
// CRIAR PÁGINA PÓS LOGIN;
// PÁGINA PÓS LOGIN -> CRIAR MENU DE NAVEGAÇÃO ENTRE AS ENTIDADES (CARDS ETC...).