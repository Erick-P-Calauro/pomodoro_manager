import { useEffect } from "react";
import * as constants from "../../types/timer-constants.ts";
import { Tarefa } from "../../../data/types.ts";

export const useTarefaStatus = (tarefas : Tarefa[], status : string) => {
    return (
        useEffect(() => {
        
            if(status === constants.DONE_PRODUCTIVITY && tarefas.length !== 0) {    
                tarefas[0].productivityDone++;
            }

            if(Notification.permission === "granted") {
                switch(status) {
                    case constants.DONE_PRODUCTIVITY: {
                        new Notification("Sua sessão de produtividade acabou !", {
                            
                        });
                        break;
                    }

                    case constants.DONE_SHORT: {
                        new Notification("Sua sessão de descanso curto acabou !");
                        break;
                    }

                    case constants.DONE_LONG: {
                        new Notification("Sua sessão de descanso longo acabou !");
                        break;
                    }
                }
            }
    
        }, [status, tarefas])
    )
}