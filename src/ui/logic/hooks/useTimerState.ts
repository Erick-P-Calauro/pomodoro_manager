import { useEffect, useRef, useState } from "react";
import { addSeconds } from "date-fns";
import * as constants from "../../types/timer-constants.ts";
import { DESCANSO_CURTO, PRODUTIVIDADE } from "../../types/types.ts";

export const useTimerState = (key) : [Date, boolean, string, () => void] => {

    const initialTimeDate = defineInitialTimeDate(key);
    const [ timer, setTimerValue ] = useState(initialTimeDate);
    const [ isRunning, setIsRunning ] = useState(false); 
    const [ status, setStatus ] = useState(constants.EVEN);

    const keyRef = useRef(key);

    useEffect(() => {

        // Bloco de mudança do valor de timer baseado no tema
        if(keyRef.current !== key) {
            
            const newTimeDate = defineInitialTimeDate(key);
            setTimerValue(newTimeDate);
            setIsRunning(false);
            setStatus(constants.EVEN);

            keyRef.current = key;
        }
        
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

    }, [isRunning, key, setStatus])

    const controlTimer = () => {
        setIsRunning(r => !r);
    }
    
    return [timer, isRunning, status, controlTimer];
}

// ================== Função para definir valores baseado no tema ================================================================

const defineInitialTimeDate = (key : string) => {
    return key === PRODUTIVIDADE ? 
    constants.INITIAL_PRODUTIVIDADE_TIMER : key === DESCANSO_CURTO ? 
    constants.INITIAL_DESCANSO_CURTO_TIMER : constants.INITIAL_DESCANSO_LONGO_TIMER;
}

const setStatusByStepDone = (key: string, setStatus: Function) => {
    key === PRODUTIVIDADE ? 
    setStatus(constants.DONE_PRODUCTIVITY) : key === DESCANSO_CURTO ?
    setStatus(constants.DONE_SHORT) : setStatus(constants.DONE_LONG)
}