import React, { useContext } from "react";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { ThemeContext } from "../../hooks/ThemeContext.ts";
import { ThemeState } from "../../utils/types.ts";

export const TimerStateButtonRow = () => {
    const theme = useContext(ThemeContext);

    return (
        <div className="mx-2.5 md-mobile:mx-5 lg-mobile:mx-16 flex items-center justify-between">
            
            <TimerStateButton text={ThemeState.PRODUTIVIDADE} changeThemeState={() => theme.changeThemeState(ThemeState.PRODUTIVIDADE)}  />
            
            <TimerStateButton text={ThemeState.CURTO} changeThemeState={() => theme.changeThemeState(ThemeState.CURTO)} />
            
            <TimerStateButton text={ThemeState.LONGO} changeThemeState={() => theme.changeThemeState(ThemeState.LONGO)} />
            
        </div>
    );
}
