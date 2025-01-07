import React, { useContext, useEffect,useState } from "react"
import { ColunaTarefas } from "./ColunaTarefas.tsx"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { Tarefa } from "../../../data/types.ts"
import { CardList } from "./CardList.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import { FormTarefa } from "./FormTarefa.tsx"
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx"
import * as constants from "../../types/timer-constants.ts";
import { mockTarefas } from "../../../data/mocks.ts"

export const Tarefas = () => {

    const { status } = useContext(ThemeContext);
    const [display, setDisplay] = useState(0)
    const [tarefas, setTarefas] = useState<Tarefa[]>([
        ...mockTarefas
    ])

    const initialTarefaContext = {
        changeDisplay: setDisplay, 
        changeTarefas: setTarefas, 
        tarefas: tarefas
    };

    // TODO: Verificar formas melhores de fazer isso;
    useEffect(() => {

        if(status === constants.DONE_PRODUCTIVITY && tarefas.length !== 0) {    
            const newTarefas = tarefas;
            newTarefas[0].productivityDone++;

            setTarefas(newTarefas);
        }

    }, [status, tarefas])

    return (
        <ColunaTarefas initialContextValue={initialTarefaContext}>
            <HeaderTarefa />
            <CardList tarefas={tarefas} />
            
            {display === 0 ? <ButtonTarefa /> : <FormTarefa />}
        </ColunaTarefas>
    )
}