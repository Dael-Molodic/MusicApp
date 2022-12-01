import { createContext, useContext, useState } from "react";


const mainAppContext = createContext("default")

export function useMainAppContext() {
    return useContext(mainAppContext);
}


export default function MainAppProvider({ children }) {

    const searchTxtState = useState("hoist the color");

    return (<>
        <mainAppContext.Provider value={{
            searchTxtState,
        }}>
            {children}
        </mainAppContext.Provider>
    </>)
    
}



