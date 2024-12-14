import React from "react"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import FormTarefa from "./FormTarefa.tsx"
import { useFormDisplayState } from "../../hooks/useFormDisplayState.ts"
import { useTarefaState } from "../../hooks/useTarefaState.ts"
import { CardTarefa } from "./CardTarefa.tsx"

export const ColunaTarefa = () => {
    const displayStateObject = useFormDisplayState();
    const displayState = displayStateObject.state;
    const setDisplayState = displayStateObject.change;

    const tarefaStateObject = useTarefaState();
    const tarefas = tarefaStateObject.state;
    const setTarefas = tarefaStateObject.change;

    return (
        <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">   
            
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
                displayState == 0 ? 
                
                <div className="lg-mobile:mx-auto desktop:mx-0">
                    <ButtonTarefa setDisplayState={setDisplayState} />
                </div>
                : 
                <FormTarefa setDisplayState={setDisplayState} tarefas={tarefas} setTarefas={setTarefas} />
            }

        </div>
    )
}