import React,{ createContext } from "react"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const MyContext = createContext()

export const useMyContext = () => useContext(MyContext);
const MyContextProvider = ({children}) => {
    const name = "Anisha";
    const fruits = ["Apple", "banana", "Pineapple"];
    const navigate = useNavigate();
  return (
    <MyContext.Provider value={{name,fruits}}>{children}</MyContext.Provider>
  )
}

export default MyContextProvider