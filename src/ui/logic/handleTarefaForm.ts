import { Tarefa } from "../../data/types"
import { TarefaFormData } from "../components/Tarefas/FormTarefa.tsx";
import { cadastrarTarefa } from "./tarefaReducer/actions.ts";

export const handleTarefaForm = (
    data : TarefaFormData, 
    setDisplayState : React.Dispatch<React.SetStateAction<Number>>, 
    dispatchTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>
) => {
    console.log(data);

    const newTarefa: Tarefa = {
        id: -1, // O id vai ser alterado no reducer
        title: data.titulo,
        description: data.description,
        productivityDone: 0, // TODO = Puxar do backend
        productivityGoal: data.productivityGoal
    };

    // Tarefa-Action
    cadastrarTarefa(dispatchTarefas, newTarefa);
    setDisplayState(0)
}