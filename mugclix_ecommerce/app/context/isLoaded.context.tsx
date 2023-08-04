'use client' 

import { ReactNode, createContext,useState } from "react"

type ContextType = {
    isLoaded: boolean;
    setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>
}

type AppProviderProps = {
    children: ReactNode;
  };
export const AppContext = createContext<ContextType | null>(null);

export const AppProvider = ({children}: AppProviderProps) => {
    const [isLoaded,setIsLoaded] = useState(false)

    return (
        <AppContext.Provider value={{isLoaded,setIsLoaded}}>
            {children}
        </AppContext.Provider>
    )
}