import React from "react"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import FormTarefa from "./FormTarefa.tsx"
import { useFormDisplayState } from "../../hooks/FormTarefa/useFormDisplayState.ts"
import { useTarefaState } from "../../hooks/useTarefaState.ts"
import { CardTarefa } from "./CardTarefa.tsx"
import { TarefaContextType } from "../../../data/types.ts"
import { TarefaContext } from "../../hooks/useTarefaContext.ts"

export const ColunaTarefa = () => {
    const display= useFormDisplayState();
    const tarefa = useTarefaState();
    const tarefaContext: TarefaContextType = {changeDisplay: display.change, changeTarefas: tarefa.change, tarefas: tarefa.state};

    return (
        <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">     
           <TarefaContext.Provider value={tarefaContext}>
            <HeaderTarefa />
                
                {
                    tarefa.state.map((tarefa) => {
                        return <CardTarefa 
                            title={tarefa.title} 
                            description={tarefa.description} 
                            productivityDone={tarefa.productivityDone} 
                            productivityGoal={tarefa.productivityGoal} />
                    }) 
                }
                
                {
                    display.state == 0 ? 
                    
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