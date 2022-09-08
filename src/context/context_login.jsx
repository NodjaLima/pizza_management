import { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [usuario, setUsuario] = useState()

  return(
    <LoginContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </LoginContext.Provider>
  )
}