import React, { useContext } from "react";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { ThemeContext } from "../../hooks/themeContext.ts";
import { ThemeState } from "../../../data/types.ts";

export const TimerStateButtonRow = () => {
    const themeContext = useContext(ThemeContext);

    return (
        <div className="w-full flex items-center justify-between">
            
            <TimerStateButton text={ThemeState.PRODUTIVIDADE} changeThemeState={() => themeContext.changeThemeState(ThemeState.PRODUTIVIDADE)}  />
            
            <TimerStateButton text={ThemeState.CURTO} changeThemeState={() => themeContext.changeThemeState(ThemeState.CURTO)} />
            
            <TimerStateButton text={ThemeState.LONGO} changeThemeState={() => themeContext.changeThemeState(ThemeState.LONGO)} />
            
        </div>
    );
}
