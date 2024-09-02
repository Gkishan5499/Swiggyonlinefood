import { createContext, useContext, useEffect, useState } from "react";


const DarkModeContext= createContext();

export const useDarkMode = ()=>{
    return useContext(DarkModeContext); 
}

export const DarkModeProvider= ({children})=>{
    const[isDarkmode, setIsDarkmode]= useState(false);

    const togglemode = ()=>{
        setIsDarkmode((prevState)=> !prevState);
    }

    const mode= isDarkmode?'dark':'light';

    useEffect(()=>{
        document.documentElement.setAttribute("data-mode",mode);
    },[isDarkmode])

    return (
        <DarkModeContext.Provider value={{mode, togglemode}} >
            {children}
        </DarkModeContext.Provider>
    )
};
