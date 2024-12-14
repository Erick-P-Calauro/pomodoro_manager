import { useState } from "react"
import { Tarefa } from "../../data/types.ts"

export const useTarefaState = () => {
    const [tarefaState, setTarefaState] = useState<Tarefa[]>([])

    return {state: tarefaState, change: setTarefaState}
}