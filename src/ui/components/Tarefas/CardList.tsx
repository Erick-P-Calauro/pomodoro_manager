import React from "react"
import { CardTarefa } from "./CardTarefa.tsx"

export const CardList = ({tarefas, tarefaSelected, setTarefaSelected}) => {
    
    return (
        <>
            {
                tarefas.map((tarefa) => {
                    if(tarefaSelected === tarefa.id) {
                        return <CardTarefa key={tarefa.id}
                            tarefa={tarefa}
                            changeSelected={setTarefaSelected}
                            receivedIsSelected={true}
                        />
                    }

                    return <CardTarefa key={tarefa.id}
                        tarefa={tarefa}
                        changeSelected={setTarefaSelected}
                        receivedIsSelected={false}
                    />
                    
                }) 
            }
        </>
    )
}