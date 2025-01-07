import { Tarefa } from "../../data/types"
import { cadastrarTarefa } from "./TarefaReducer/actions.ts";

type handleTarefaFormParams = {
    event: React.SyntheticEvent;
    formState: number,
    setDisplayState: React.Dispatch<React.SetStateAction<number>>,
    dispatchTarefas : React.Dispatch<React.SetStateAction<Tarefa[]>>
}

export const HandleTarefaForm = ({event, formState, setDisplayState, dispatchTarefas}: handleTarefaFormParams) => {
    event.preventDefault()

    let description = ""
    const [title, productivity ] = event.currentTarget.getElementsByTagName("input")
    
    if(formState === 1) {
        description = event.currentTarget.getElementsByTagName("textarea")[0].value
    }

    const newTarefa: Tarefa = {
        id: -1, // O id vai ser alterado no reducer
        title: title.value === undefined ? "" : title.value,
        description: description,
        productivityDone: 0, // TODO = Puxar do backend
        productivityGoal: productivity.value === undefined ? 0 : Number.parseInt(productivity.value)
    };

    // Tarefa-Action
    cadastrarTarefa(dispatchTarefas, newTarefa);
    
    setDisplayState(0)
}