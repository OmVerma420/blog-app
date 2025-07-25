import { createContext, useState } from "react"

export const DataContext = createContext();


const DataProvider = ({children}) => {
    const [data, setData] = useState({ username: '', name:'' });

    return (
        <DataContext.Provider value={{data , setData}}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider