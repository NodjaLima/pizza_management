import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [usuario, setUsuario] = useState([
    {
      usuario: 'usuario teste',
      senha: 'teste123'
    },
    {
      usuario: 'usuario teste2',
      senha: 'teste1234'
    }
  ])

  return(
    <LoginContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </LoginContext.Provider>
  )
}