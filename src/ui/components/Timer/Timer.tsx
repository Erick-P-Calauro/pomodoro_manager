import { useContext, useEffect, useState } from "react";
import { TimerButtonRow } from "./TimerButtonRow.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { TimerBox } from "./TimerBox.tsx";
import { TimerText } from "./TimerText.tsx";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../types/types.ts";
import { useTimerState } from "../../logic/hooks/useTimerState.ts";
import { BodyLarge } from "../Typography/BodyLarge.tsx";

function Timer(){

    const themeContext = useContext(ThemeContext);
    const { key, colors, changeStatus} = themeContext;
    const [ shouldSkip, setShouldSkip ] = useState(false);
    const [ timer, isRunning, status, controlTimer ] = useTimerState(key, shouldSkip, setShouldSkip);

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
            <div className="w-full flex items-center justify-between">
                <span className="w-[45%]"></span>

                <div className="w-full flex items-center justify-between">
                    <button onClick={controlTimer}  style={{color: colors.main, boxShadow: isRunning ? "none" : "var(--lgBoxShadow)"}} 
                        className="bg-normal rounded-sm flex items-center justify-center shadow-lgBoxShadow py-1.5 px-6 lg-mobile:py-3 lg-mobile:px-11">
                        
                        <BodyLarge text="Iniciar" style={{}}  />
                    </button>
                    
                    <button className={isRunning ? "flex": "hidden"} onClick={() => {
                        setShouldSkip(true);
                    }}>
                        <img className="h-10" src="/assets/skip_next.svg"></img>
                    </button>
                </div>
            </div>
        </TimerBox>
    );
}

export default Timer;