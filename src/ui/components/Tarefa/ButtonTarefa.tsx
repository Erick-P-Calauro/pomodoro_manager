import React, { useContext } from "react";
import { ThemeContext } from "../../hooks/themeContext.ts";

export const ButtonTarefa = ({setDisplayState}) => {
    const themeContext = useContext(ThemeContext);
    
    return (
        <button onClick={() => setDisplayState(1)} className="mt-3 bg-normal rounded-sm py-2.5 flex justify-center">
            <span className="font-workSans font-medium text-xs" style={{color: themeContext.theme.secondary}}>Adicionar Tarefa</span>
        </button> 
    )
}