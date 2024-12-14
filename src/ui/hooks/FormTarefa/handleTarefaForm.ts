import { handleTarefaFormProps } from "../../../data/props"
import { Tarefa } from "../../../data/types"

export const HandleTarefaForm = (props: handleTarefaFormProps) => {
    props.event.preventDefault()

    let description
    const [title, productivity, project] = props.event.currentTarget.getElementsByTagName("input")
    
    if(props.formState == 1) {
        description = props.event.currentTarget.getElementsByTagName("textarea")[0].value
    }else {
        description = ""
    } 

    const newTarefa: Tarefa = {
        title: title.value == undefined ? "" : title.value,
        description: description,
        productivityDone: 0, // TODO = Puxar do backend
        productivityGoal: productivity.value == undefined ? 0 : Number.parseInt(productivity.value)
    };

    let newTarefas = props.tarefas;
    newTarefas.push(newTarefa)
    props.setTarefas(newTarefas)

    props.setDisplayState(0)
}