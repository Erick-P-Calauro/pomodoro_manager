import React, { useState } from "react"
import { ColunaTarefas } from "./ColunaTarefas.tsx"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { Tarefa } from "../../../data/types.ts"
import { CardList } from "./CardList.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import { FormTarefa } from "./FormTarefa.tsx"

export const Tarefas = () => {
    
    const [display, setDisplay] = useState(0)
    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    
    const initialTarefaContext = {
        changeDisplay: setDisplay, 
        changeTarefas: setTarefas, 
        tarefas: tarefas
    };

    return (
        <ColunaTarefas initialContextValue={initialTarefaContext}>
            <HeaderTarefa />
            <CardList tarefas={tarefas} />
            
            {display === 0 ? <ButtonTarefa /> : <FormTarefa />}
        </ColunaTarefas>
    )
}