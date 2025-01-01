import React, { useEffect, useState } from "react";
import { useThemeState } from "../hooks/useTheme.ts";
import * as constants from "../../types/timer-constants.ts";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../types/types.ts";

export type ThemeContextType =  {
    key: string,
    colors: {
        main : string,
        secondary: string,
    }
    changeThemeState: (newTheme: string) => void,
    status: string,
    changeStatus: (newStatus: string) => void,
}

export const ThemeContextState: ThemeContextType = {
    key: "PRODUTIVIDADE",
    status: "STALLED",
    colors: {
        main: "",
        secondary: "",
    },
    changeThemeState: (a) => {},
    changeStatus: (a) => {}
}

export const ThemeContext = React.createContext(ThemeContextState)

export const ThemeProvider = ({children}) => {
    const [ themeState, setThemeState ] = useThemeState()
    const [ status, setStatus ] = useState(constants.EVEN);

    const defineNextTheme = (status: string) => {
        return status === constants.DONE_PRODUCTIVITY ?
        DESCANSO_CURTO : status === constants.DONE_SHORT ?
        DESCANSO_LONGO : PRODUTIVIDADE;
    }
    
    useEffect(() => {
        
        if(status !== constants.EVEN) {
            setThemeState(defineNextTheme(status));
        }

    }, [status, setThemeState])
    
    const initialState = {
        ...themeState,
        changeThemeState: setThemeState,
        status: status,
        changeStatus: setStatus
    }

    return (
        <ThemeContext.Provider value={initialState}>
            {children}
        </ThemeContext.Provider>
    )
}