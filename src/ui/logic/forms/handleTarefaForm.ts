import { Tarefa } from "../../../data/types.ts"
import { TarefaFormData } from "../../components/Tarefas/FormTarefa.tsx";
import { cadastrarTarefa, editarTarefa } from "../tarefaReducer/actions.ts";

export const handleTarefaForm = ({
    data, 
    setDisplayState, 
    dispatchTarefas

}:{
    data : TarefaFormData,
    setDisplayState: React.Dispatch<React.SetStateAction<Number>>,
    dispatchTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>,
    
})  => {
    console.log(data);

    const newTarefa: Tarefa = {
        id: data.id, // O id vai ser alterado no reducer
        title: data.title,
        description: data.description,
        productivityDone: data.productivityDone, // TODO = Puxar do backend
        productivityGoal: data.productivityGoal
    };

    if(data.id === -1) {
        // Tarefa-Action
        cadastrarTarefa(dispatchTarefas, newTarefa);
    }else {
        editarTarefa(dispatchTarefas, newTarefa);
    }

    setDisplayState(0)
}