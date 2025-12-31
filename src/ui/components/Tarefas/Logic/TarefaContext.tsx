import React from "react";
import { Tarefa } from "../../../../data/dto.ts";

export type TarefaStateType = {
    ativarFormulario: () => void,
    desativarFormulario: () => void,
    sincronizarTarefas : () => void,
    selecionarTarefa: (tarefa: Tarefa | undefined) => void,
    dispatchTarefas: (value: any) => void
}

export const TarefaContext = React.createContext<TarefaStateType | null>(null);

export const TarefaProvider = ({children, value} : any) => {
    return (
        <TarefaContext.Provider value={value}>
            {children}
        </TarefaContext.Provider>
    );
}