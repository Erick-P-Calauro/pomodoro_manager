import React from "react"
import { CardTarefa } from "./CardTarefa.tsx"

export const CardList = ({tarefas}) => {
    
    return (
        <>
            {
                tarefas.map((tarefa) => {
                    return <CardTarefa key={tarefa.id}
                            tarefa={tarefa}
                        />
                }) 
            }
        </>
    )
}