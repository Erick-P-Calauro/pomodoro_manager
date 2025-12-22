import React from "react";
import { Tarefa, TarefaCreate } from "../../../data/dto.ts";

export type TarefaStateType = {
    tarefas: Tarefa[]
    cadastrar: (tarefa: TarefaCreate) => void,
    editar: (tarefa: TarefaCreate) => void,
    apagar: (id: string) => void,
    selecionar: (tarefa: Tarefa) => void
}

export const TarefaContext = React.createContext<TarefaStateType | null>(null);

export const TarefaProvider = ({children, value} : any) => {
    return (
        <TarefaContext.Provider value={value}>
            {children}
        </TarefaContext.Provider>
    );
}