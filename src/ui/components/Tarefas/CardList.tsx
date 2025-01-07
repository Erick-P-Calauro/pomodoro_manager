import React, { useState } from "react"
import { CardTarefa } from "./CardTarefa.tsx"

export const CardList = ({tarefas}) => {
    const [tarefaSelected, setTarefaSelected] = useState("");

    return (
        <>
            {
                tarefas.map((tarefa) => {
                    if(tarefaSelected === tarefa.title) {
                        return <CardTarefa key={tarefa.title}
                            title={tarefa.title} 
                            productivityDone={tarefa.productivityDone} 
                            productivityGoal={tarefa.productivityGoal} 
                            changeSelected={setTarefaSelected}
                            receivedIsSelected={true}
                        />
                    }

                    return <CardTarefa key={tarefa.title}
                        title={tarefa.title} 
                        productivityDone={tarefa.productivityDone} 
                        productivityGoal={tarefa.productivityGoal} 
                        changeSelected={setTarefaSelected}
                        receivedIsSelected={false}
                    />
                    
                }) 
            }
        </>
    )
}