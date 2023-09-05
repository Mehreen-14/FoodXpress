import React, {useState, createContext} from "react"

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {
    const [restaurants, setRestaurents] = useState([])
    return (
        <GlobalContext.Provider value={{restaurants,setRestaurents}}>
            {props.children}
        </GlobalContext.Provider>
    )
}