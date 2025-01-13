import { useContext, useEffect, useState } from "react";
import { addSeconds } from "date-fns";
import * as constants from "../../types/timer-constants.ts";
import { DESCANSO_CURTO, PRODUTIVIDADE } from "../../types/types.ts";
import { SettingsContext } from "../contexts/useSettingsContext.tsx";
import { Settings } from "../../../data/types.ts";

export const useTimerState = (key) : [Date, boolean, string, () => void] => {

    const { settings } = useContext(SettingsContext);
    const initialTimeDate = defineInitialTimeDate(key, settings);

    const [ timer, setTimerValue ] = useState(initialTimeDate);
    const [ isRunning, setIsRunning ] = useState(false); 
    const [ status, setStatus ] = useState(constants.EVEN);

    // Bloco de mudança do valor de timer baseado no tema e nas configurações
    useEffect(() => {

        const newTimeDate = defineInitialTimeDate(key, settings);
        setTimerValue(newTimeDate);
        setIsRunning(false);
        setStatus(constants.EVEN);

    }, [key, settings])

    useEffect(() => {
        
        // Bloco de mudança no valor do timer baseado no isRunning
        const interval = setInterval(() => {
            setTimerValue(t => {

                // Parando a contagem no 00:00
                if(t.getMinutes() === 0 && t.getSeconds() === 1) {
                    setIsRunning(false)
                    setStatusByStepDone(key, setStatus);
                }

                return addSeconds(t, -1);
            })

        }, 1000)

        if(!isRunning) {
            clearInterval(interval)
        }

        return () => {
            clearInterval(interval);
        }

    }, [isRunning, setStatus, key, settings])

    const controlTimer = () => {
        setIsRunning(r => !r);
    }
    
    return [timer, isRunning, status, controlTimer];
}

// ================== Função para definir valores baseado no tema ================================================================

const defineInitialTimeDate = (key : string, settings : Settings) => {
    return key === PRODUTIVIDADE ? 
    new Date(0,0,0,0, settings.timer.productivity) : key === DESCANSO_CURTO ? 
    new Date(0,0,0,0, settings.timer.short) : 
    new Date(0,0,0,0, settings.timer.long);
}

const setStatusByStepDone = (key: string, setStatus: Function) => {
    key === PRODUTIVIDADE ? 
    setStatus(constants.DONE_PRODUCTIVITY) : key === DESCANSO_CURTO ?
    setStatus(constants.DONE_SHORT) : setStatus(constants.DONE_LONG)
}