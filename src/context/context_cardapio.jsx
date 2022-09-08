import { createContext, useState } from "react";

export const CardapioContext = createContext();

export const CardapioProvider = ({ children }) => {
  const [cardapio, setCardapio] = useState()

  return(
    <CardapioProvider.Provider value={{ cardapio, setCardapio }}>
      {children}
    </CardapioProvider.Provider>
  )
}