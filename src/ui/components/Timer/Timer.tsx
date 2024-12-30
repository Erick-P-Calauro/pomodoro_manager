import React, { useContext, useState } from "react";
import { TimerButtonRow } from "./TimerButtonRow.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { TimerBox } from "./TimerBox.tsx";
import { TimerText } from "./TimerText.tsx";
import { TimerControlButton } from "./TimerControlButton.tsx";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../data.ts";

function Timer(){
    const themeContext = useContext(ThemeContext)
    const [ timer ] = useState("20:00"); // TODO : Transformar em um timer de verdade

    return (
        <TimerBox style={{color: themeContext.colors.main}}>
            <TimerButtonRow>
                <TimerStateButton text={PRODUTIVIDADE} context={themeContext}  />
                <TimerStateButton text={DESCANSO_CURTO} context={themeContext} />
                <TimerStateButton text={DESCANSO_LONGO} context={themeContext} />
            </TimerButtonRow>

            <TimerText timerValue={timer}/>
            <TimerControlButton style={{color: themeContext.colors.main}} />
        </TimerBox>
    );
}

export default Timer;