import React, { useContext } from "react"
import { ThemeContext } from "../../hooks/themeContext.ts"
import { TimerStateButtonProps } from "../../../data/props.ts";
import { BodySmall } from "../Typography/BodySmall.tsx";

export const TimerStateButton = ({...props}: TimerStateButtonProps) => {
    const themeContext = useContext(ThemeContext);

    return (
        <button id={"change"+props.text} onClick={() => themeContext.changeThemeState(props.text)} 
            className="rounded-sm px-3 py-1.5 flex "
                style={{backgroundColor: themeContext.theme.key === props.text ? themeContext.theme.secondary : themeContext.theme.main}}
            >


            <BodySmall text={props.text} style={{color: "var(--normal)"}}/>
        </button>
    )
}