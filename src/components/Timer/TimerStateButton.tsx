import React, { useContext } from "react"
import { TimerStateButtonProps } from "../../utils/props"
import { ThemeContext } from "../../hooks/ThemeContext.ts"

export const TimerStateButton = ({...props}: TimerStateButtonProps) => {
    const theme = useContext(ThemeContext);

    return (
        <button id={"change"+props.text} onClick={() => props.changeThemeState()} 
            className="rounded-sm px-2 py-3 sm-mobile:flex md-mobile:block "
                style={{backgroundColor: theme.colors.key === props.text ? theme.colors.secondary : theme.colors.main}}
            >

            <span className="text-normal sm-mobile:text-sm md-mobile:text-lg font-medium font-workSans">{props.text}</span>
        </button>
    )
}