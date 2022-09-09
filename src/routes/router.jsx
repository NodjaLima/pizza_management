import { BrowserRouter } from 'react-router-dom'
import Header from '../components/header/Header.jsx'
import { LoginProvider } from '../context/context_login.jsx'
import { AppRoutes } from './routes.jsx'


export default function Router() {


    return (
        <LoginProvider>
          <BrowserRouter>
            <Header />
              <AppRoutes />
          </BrowserRouter>
        </LoginProvider>
    
    )
}