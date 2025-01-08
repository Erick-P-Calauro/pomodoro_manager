import React, { useContext, useEffect,useReducer,useState } from "react"
import { ColunaTarefas } from "./ColunaTarefas.tsx"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { CardList } from "./CardList.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import { FormTarefa } from "./FormTarefa.tsx"
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx"
import * as constants from "../../types/timer-constants.ts";
import { mockTarefas } from "../../../data/mocks.ts"
import { TarefaReducer } from "../../logic/tarefaReducer/reducer.ts"
import { Tarefa } from "../../../data/types.ts"

export const Tarefas = () => {

    const { status } = useContext(ThemeContext);
    
    const [display, setDisplay] = useState(0) // Estado de visibilidade de Tarefas (Botão de adicionar ou Formulário
    const [tarefas, dispatchTarefas] = useReducer(TarefaReducer, [...mockTarefas]) // CRUD de Tarefas
    const [formTarget, setTarget] = useState<Tarefa>() // Tarefa para edição
    const [tarefaSelected, setTarefaSelected] = useState(-1); // Tarefa que está mostrando menu com "EDITAR" e "APAGAR"

    const initialTarefaContext = {
        changeDisplay: setDisplay, 
        dispatchTarefas: dispatchTarefas, 
        setTarget: setTarget,
        tarefas: tarefas
    };

    useEffect(() => {

        if(status === constants.DONE_PRODUCTIVITY && tarefas.length !== 0) {    
            tarefas[0].productivityDone++;
        }

    }, [status, tarefas])

    useEffect(() => {
        
        if(formTarget !== undefined) {
            setDisplay(1);
        }

    }, [formTarget])

    return (
        <ColunaTarefas initialContextValue={initialTarefaContext}>
            <HeaderTarefa />
            <CardList 
                tarefas={tarefas} 
                tarefaSelected={tarefaSelected} 
                setTarefaSelected={setTarefaSelected} 
            
            />
            
            {display === 0 ? <ButtonTarefa /> : 
            <FormTarefa 
                formTarget={formTarget} 
                setFormTarget={setTarget} 
                setTarefaSelected={setTarefaSelected}

            />}
        </ColunaTarefas>
    )
}