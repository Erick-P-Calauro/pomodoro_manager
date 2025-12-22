import { useContext, useEffect, useRef, useState } from "react";
import * as constants from "../../types/timer-constants.ts";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../types/types.ts";
import { SettingsContext } from "../contexts/useSettingsContext.tsx";
import { Settings } from "../../../data/dto.ts";

export const useTimerState = (key: any) : [Date, boolean, string, () => void] => {

    const { settings } = useContext(SettingsContext);
    const initialTimeDate = defineInitialTimeDate(key, settings);

    const [ timer, setTimerValue ] = useState(initialTimeDate);
    const [ isRunning, setIsRunning ] = useState(false); 
    const [ status, setStatus ] = useState(constants.EVEN);
    const [ productivityCounter, setProductivityCounter] = useState<number>(0);

    const timerRef = useRef<number>(Date.now());

    // Bloco de mudança do valor de timer baseado no tema e nas configurações
    useEffect(() => {

        const newTimeDate = defineInitialTimeDate(key, settings);
        setTimerValue(newTimeDate);
        setIsRunning(false);
        setStatus(constants.EVEN);

    }, [key, settings])

    // Bloco de mudança no valor do timer baseado no isRunning
    useEffect(() => {
        const timeout = setTimeout(() => {

            setTimerValue(t => {

                // Novo Timer = Timer Antigo - (Tempo Atual - Tempo de Referência)
                const novoTempo = t.getTime() - (Date.now() - timerRef.current);
                const novaData = new Date(novoTempo);

                // Parando a contagem no 00:00
                if(novaData.getMinutes() === 0 && novaData.getSeconds() === 0) {
                    setStatusByStepDone(key, setStatus, productivityCounter, setProductivityCounter);
                    setIsRunning(false)
                    clearInterval(this);
                }

                return new Date(novoTempo);
            })

        }, 900)

        if(!isRunning) {
            clearTimeout(timeout);
        }

        // Desmontagem => Muda o valor de referência para o timer
        return () => {
            timerRef.current = Date.now();
        }

    }, [isRunning, timer, settings, key, productivityCounter, setProductivityCounter])

    // Requisitar permissão para notificações 
    // Depende do clique no botão "Iniciar" do Timer
    useEffect(() => {

        if(isRunning === true && Notification.permission !== "granted") {
            Notification.requestPermission();
        };

    }, [isRunning])

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

const setStatusByStepDone = (key: string, setStatus: Function, productivityCounter : number, setProductivityCounter: Function) => {
    if(key === PRODUTIVIDADE && productivityCounter === 6) {
        setStatus(constants.TO_LONG)
        setProductivityCounter(0);
        
    }else if(key === PRODUTIVIDADE && productivityCounter !== 6) {
        setStatus(constants.TO_SHORT)
        setProductivityCounter((p: number) => {
            return p+1;
        })      

    }else if(key === DESCANSO_LONGO){
        setStatus(constants.TO_PRODUCTIVITY_LONG)

    }else if(key === DESCANSO_CURTO) {
        setStatus(constants.TO_PRODUCTIVITY_SHORT)
    }
}