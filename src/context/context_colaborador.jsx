import { createContext, useState } from "react";

export const ColaboradorContext = createContext();

export const ColaboradorProvider = ({ children }) => {
  const [ matricula, setMatricula ] = useState([])

  return(
    <ColaboradorContext.Provider value={{ matricula, setMatricula }}>
      {children}
    </ColaboradorContext.Provider>
  )
}