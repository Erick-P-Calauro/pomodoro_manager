import React from "react"
import { BodySmall } from "../Typography/BodySmall.tsx";
import { DESCANSO_CURTO, PRODUTIVIDADE } from "../../types/types.ts";
import { ThemeContextType } from "../../logic/contexts/useThemeContext.tsx";

export const TimerStateButton = ({ text, context } : { text : string, context: ThemeContextType}) => {
    const {key, colors, changeThemeState } = context;
    const { main, secondary } = colors;
    const displayText = text === PRODUTIVIDADE ? "Produtividade" : text === DESCANSO_CURTO ? "Descanso Curto" : "Descanso Longo";

    return (
        <button id={"change"+text} onClick={() => changeThemeState(text)} 
            className="rounded-sm px-3 py-1.5 flex lg-mobile:px-4 lg-mobile:py-3 ease-in-out duration-200" 
            style={{
                backgroundColor: key === text ? secondary : main,
                boxShadow: key === text ? "var(--mdBoxShadow)" : ""}}>

            <BodySmall text={displayText} style={{color: "var(--normal)"}}/>
        </button>
    )
}