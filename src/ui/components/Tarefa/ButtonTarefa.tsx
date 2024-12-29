import React, { useContext } from "react";
import { BodyMedium } from "../Typography/BodyMedium.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { TarefaContext } from "../../logic/contexts/useTarefaContext.tsx";

export const ButtonTarefa = () => {
    const { colors } = useContext(ThemeContext);
    const { secondary } = colors;

    const { changeDisplay }= useContext(TarefaContext)
    
    return (
        <button onClick={() => changeDisplay(1)} 
            className="mt-3 bg-normal rounded-sm py-2.5 w-full shadow-lgBoxShadow lg-mobile:px-11 lg-mobile:py-2.5">
            
            <BodyMedium text="Adicionar Tarefa" style={{color: secondary}}/>
        </button> 
    )
}