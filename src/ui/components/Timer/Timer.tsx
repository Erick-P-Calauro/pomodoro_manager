import React, { useContext } from "react";
import { TimerButtonRow } from "./TimerButtonRow.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { TimerBox } from "./TimerBox.tsx";
import { TimerText } from "./TimerText.tsx";
import { TimerControlButton } from "./TimerControlButton.tsx";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../data.ts";
import { useTimerState } from "../../logic/hooks/useTimerState.ts";

function Timer(){
    const themeContext = useContext(ThemeContext)
    const [ timer, isRunning, status, controlTimer ] = useTimerState(themeContext.key);

    return (
        <TimerBox style={{backgroundColor: themeContext.colors.main}}>
            <TimerButtonRow>
                <TimerStateButton text={PRODUTIVIDADE} context={themeContext}  />
                <TimerStateButton text={DESCANSO_CURTO} context={themeContext} />
                <TimerStateButton text={DESCANSO_LONGO} context={themeContext} />
            </TimerButtonRow>

            <TimerText timerValue={timer}/>
            <TimerControlButton 
                controlFunction={controlTimer} 
                style={{color: themeContext.colors.main, boxShadow: isRunning ? "none" : "var(--lgBoxShadow)"}} 
            />
        </TimerBox>
    );
}

export default Timer;