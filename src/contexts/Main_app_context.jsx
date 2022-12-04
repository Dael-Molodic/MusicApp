import { createContext, useContext, useState } from "react";


const mainAppContext = createContext("default")

export function useMainAppContext() {
    return useContext(mainAppContext);
}


export default function MainAppProvider({ children }) {

    const searchTxtState = useState("hoist the color");
    const connectedUser = useState({});

    const mainAppStates = {
        searchTxtState,
        connectedUser,
    }

    return (<>
        <mainAppContext.Provider value={ mainAppStates }>
            {children}
        </mainAppContext.Provider>
    </>)
    
}



