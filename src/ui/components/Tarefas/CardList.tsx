import React, { useState } from "react"
import { CardTarefa } from "./CardTarefa.tsx"

export const CardList = ({tarefas}) => {
    const [tarefaSelected, setTarefaSelected] = useState(-1);

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