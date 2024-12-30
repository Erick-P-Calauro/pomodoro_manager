import { useEffect, useState } from "react";
import { addSeconds } from "date-fns";
import { 
    DESCANSO_CURTO, 
    INITIAL_DESCANSO_CURTO_TIMER, 
    INITIAL_DESCANSO_LONGO_TIMER, 
    INITIAL_PRODUTIVIDADE_TIMER, 
    PRODUTIVIDADE, 
    STALLED} from "../../data.ts";

export const useTimerState = (key: string) : [Date, boolean, string, () => void] => {
    
    const initialTimeDate = defineInitialTimeDate(key);

    const [ timer, setTimerValue ] = useState(initialTimeDate);
    const [ isRunning, setIsRunning ] = useState(false);
    const [ status, setStatus ] = useState(STALLED);

    // Observa a mudança de timerState baseado na mudança do themeState
    useEffect(() => {

        const newTimeDate = defineInitialTimeDate(key);

        setTimerValue(newTimeDate);
        setIsRunning(false);
        
    }, [key])

    // Observa e efetua mudanças no valor de timer baseado no isRunning
    useEffect(() => {
        const interval = setInterval(() => {
            setTimerValue(t => {
                
                // Parando a contagem no 00:00
                if(t.getMinutes() === 0 && t.getSeconds() === 1) {
                    setIsRunning(false)
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

    }, [isRunning])

    const controlTimer = () => {
        setIsRunning(r => !r);
    }
    
    return [timer, isRunning, status, controlTimer];
}

const defineInitialTimeDate = (key : string) => {
    return key === PRODUTIVIDADE ? 
    INITIAL_PRODUTIVIDADE_TIMER : key === DESCANSO_CURTO ? 
    INITIAL_DESCANSO_CURTO_TIMER : INITIAL_DESCANSO_LONGO_TIMER;
}