import React from "react";
import { Tarefa } from "../../../data/types";

type TarefaStateType = {
    changeDisplay: (number) => void,
    changeTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>,
    tarefas: Tarefa[]
}

const TarefaState: TarefaStateType = {
    changeDisplay: (a) => {},
    changeTarefas: (a) => {},
    tarefas : []
}
export const TarefaContext = React.createContext(TarefaState);

export const TarefaProvider = ({children, value}) => {
    return (
        <TarefaContext.Provider value={value}>
            {children}
        </TarefaContext.Provider>
    );
}