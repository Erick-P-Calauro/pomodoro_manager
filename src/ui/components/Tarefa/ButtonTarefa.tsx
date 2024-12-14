import React, { useContext } from "react";
import { BodyMedium } from "../Typography/BodyMedium.tsx";
import { TarefaContext } from "../../hooks/useTarefaContext.ts";
import { ThemeContext } from "../../hooks/useThemeContext.ts";

export const ButtonTarefa = () => {
    const themeContext = useContext(ThemeContext);
    const tarefaContext = useContext(TarefaContext)
    
    return (
        <button onClick={() => tarefaContext.changeDisplay(1)} 
            className="mt-3 bg-normal rounded-sm py-2.5 w-full shadow-lgBoxShadow lg-mobile:px-11 lg-mobile:py-2.5">
            
            <BodyMedium text="Adicionar Tarefa" style={{color: themeContext.theme.secondary}}/>
        </button> 
    )
}