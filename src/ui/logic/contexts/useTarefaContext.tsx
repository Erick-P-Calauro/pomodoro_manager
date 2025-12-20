import React from "react";
import { Tarefa } from "../../../data/types";

export type TarefaStateType = {
    changeDisplay: (value: number) => void,
    dispatchTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>,
    setTarget : React.Dispatch<React.SetStateAction<Object>>
    tarefas: Tarefa[]
}

const TarefaState: TarefaStateType = {
    changeDisplay: (a) => {},
    dispatchTarefas: (a) => {},
    setTarget: () => {},
    tarefas : []
}
export const TarefaContext = React.createContext(TarefaState);

export const TarefaProvider = ({children, value} : any) => {
    return (
        <TarefaContext.Provider value={value}>
            {children}
        </TarefaContext.Provider>
    );
}