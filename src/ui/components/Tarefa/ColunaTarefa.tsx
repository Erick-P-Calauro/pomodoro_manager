import React, { useState } from "react"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import FormTarefa from "./FormTarefa.tsx"
import { CardTarefa } from "./CardTarefa.tsx"
import { Tarefa } from "../../../data/types.ts"
import { TarefaContext } from "../../logic/contexts/useTarefaContext.tsx"

export const ColunaTarefa = () => {
    const [display, setDisplay] = useState(0)
    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    
    const initialTarefaContext = {
        changeDisplay: setDisplay, 
        changeTarefas: setTarefas, 
        tarefas: tarefas
    };

    return (
        <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">     
           <TarefaContext.Provider value={initialTarefaContext}>
            <HeaderTarefa />
                
                {
                    tarefas.map((tarefa) => {
                        return <CardTarefa 
                            title={tarefa.title} 
                            description={tarefa.description} 
                            productivityDone={tarefa.productivityDone} 
                            productivityGoal={tarefa.productivityGoal} />
                    }) 
                }
                
                {
                    display === 0 ? 
                    
                    <div className="lg-mobile:mx-auto desktop:mx-0">
                        <ButtonTarefa />
                    </div>
                    : 
                    <FormTarefa />
                }
                
           </TarefaContext.Provider>
        </div>
    )
}