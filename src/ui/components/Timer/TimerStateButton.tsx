import React, { useContext } from "react"
import { BodySmall } from "../Typography/BodySmall.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";

export const TimerStateButton = ({ text } : {text : string}) => {
    const {key, colors, changeThemeState} = useContext(ThemeContext);
    const { main, secondary } = colors;

    const displayText = text.indexOf("_") !== -1 ?  
        "Descanso " + text.split("_")[1].charAt(0).toUpperCase() + text.split("_")[1].substring(1).toLowerCase() : "Produtividade"

    return (
        <button id={"change"+text} onClick={() => changeThemeState(text)} 
            className="rounded-sm px-3 py-1.5 flex lg-mobile:px-4 lg-mobile:py-3" 
            style={{
                backgroundColor: key === text ? secondary : main,
                boxShadow: key === text ? "var(--mdBoxShadow)" : ""}}>

            <BodySmall text={displayText} style={{color: "var(--normal)"}}/>
        </button>
    )
}