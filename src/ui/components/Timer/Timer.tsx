import React, { useContext, useEffect } from "react";
import { TimerButtonRow } from "./TimerButtonRow.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { TimerBox } from "./TimerBox.tsx";
import { TimerText } from "./TimerText.tsx";
import { TimerControlButton } from "./TimerControlButton.tsx";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../types/types.ts";
import { useTimerState } from "../../logic/hooks/useTimerState.ts";

function Timer(){

    const themeContext = useContext(ThemeContext);
    const { key, colors, changeStatus} = themeContext;
    const [ timer, isRunning, status, controlTimer ] = useTimerState(key);

    useEffect(() => {
        changeStatus(status);

    }, [status, changeStatus])

    return (
        <TimerBox style={{backgroundColor: colors.main}}>
            <TimerButtonRow>
                <TimerStateButton text={PRODUTIVIDADE} context={themeContext}  />
                <TimerStateButton text={DESCANSO_CURTO} context={themeContext} />
                <TimerStateButton text={DESCANSO_LONGO} context={themeContext} />
            </TimerButtonRow>

            <TimerText timerValue={timer}/>
            <TimerControlButton 
                controlFunction={controlTimer} 
                style={{color: colors.main, boxShadow: isRunning ? "none" : "var(--lgBoxShadow)"}} 
            />
        </TimerBox>
    );
}

export default Timer;