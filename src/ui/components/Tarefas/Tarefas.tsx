import React, { useContext, useEffect,useReducer,useState } from "react"
import { ColunaTarefas } from "./ColunaTarefas.tsx"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import { CardList } from "./CardList.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import { FormTarefa } from "./FormTarefa.tsx"
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx"
import { mockTarefas } from "../../../data/mocks.ts"
import { TarefaReducer } from "../../logic/tarefaReducer/reducer.ts"
import { Tarefa } from "../../../data/types.ts"
import { useTarefaStatus } from "../../logic/hooks/useTarefaStatus.ts"

export const Tarefas = () => {

    const { status } = useContext(ThemeContext);
    
    const [display, setDisplay] = useState(0) // Estado de visibilidade de Tarefas (Botão de adicionar ou Formulário
    const [tarefas, dispatchTarefas] = useReducer(TarefaReducer, [...mockTarefas]) // CRUD de Tarefas
    const [formTarget, setTarget] = useState<Tarefa>() // Tarefa para edição

    const initialTarefaContext = {
        changeDisplay: setDisplay, 
        dispatchTarefas: dispatchTarefas, 
        setTarget: setTarget,
        tarefas: tarefas
    };

    // Manipulação do estado a partir das sessões de produtividade
    useTarefaStatus(tarefas, status);

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
            />
            
            {display === 0 ? <ButtonTarefa /> : 
            <FormTarefa 
                formTarget={formTarget} 
                setFormTarget={setTarget} 
            />}

        </ColunaTarefas>
    )
}