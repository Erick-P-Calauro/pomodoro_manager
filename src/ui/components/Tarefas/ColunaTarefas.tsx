import React, { useState } from "react"
import { Tarefa } from "../../../data/types.ts"
import { TarefaContext } from "../../logic/contexts/useTarefaContext.tsx"

export const ColunaTarefas = ({children}) => {
    const [display, setDisplay] = useState(0)
    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    
    const initialTarefaContext = {
        changeDisplay: setDisplay, 
        changeTarefas: setTarefas, 
        tarefas: tarefas
    };

    return (
        <TarefaContext.Provider value={initialTarefaContext}>
            <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">     
                {children}
            </div>    
        </TarefaContext.Provider>
    )
}