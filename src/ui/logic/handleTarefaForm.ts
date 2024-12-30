import { Tarefa } from "../../data/types"

type handleTarefaFormParams = {
    event: React.SyntheticEvent;
    formState: number,
    tarefas: Tarefa[],
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>,
    setDisplayState: React.Dispatch<React.SetStateAction<number>>
}

export const HandleTarefaForm = ({event, formState, tarefas, setTarefas, setDisplayState}: handleTarefaFormParams) => {
    event.preventDefault()

    let description = ""
    const [title, productivity ] = event.currentTarget.getElementsByTagName("input")
    
    if(formState === 1) {
        description = event.currentTarget.getElementsByTagName("textarea")[0].value
    }

    const newTarefa: Tarefa = {
        title: title.value === undefined ? "" : title.value,
        description: description,
        productivityDone: 0, // TODO = Puxar do backend
        productivityGoal: productivity.value === undefined ? 0 : Number.parseInt(productivity.value)
    };

    let newTarefas = tarefas;
    newTarefas.push(newTarefa)
    
    setTarefas(newTarefas)
    setDisplayState(0)
}