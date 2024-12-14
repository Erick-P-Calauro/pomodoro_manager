import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext.ts";
import { BodyMedium } from "../Typography/BodyMedium.tsx";

export const ButtonTarefa = ({setDisplayState}) => {
    const themeContext = useContext(ThemeContext);
    
    return (
        <button onClick={() => setDisplayState(1)} 
            className="mt-3 bg-normal rounded-sm py-2.5 w-full lg-mobile:px-11 lg-mobile:py-2.5">
            
            <BodyMedium text="Adicionar Tarefa" style={{color: themeContext.theme.secondary}}/>
        </button> 
    )
}