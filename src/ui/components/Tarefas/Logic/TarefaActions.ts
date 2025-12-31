import { Tarefa } from "../../../../data/dto";

export const TarefaActions = {
    LOAD_TAREFA: (tarefas : Tarefa[]) => {return {type: "LOAD_TAREFAS", payload: tarefas}},
    ADD_TAREFA: (tarefa: Tarefa) => {return {type: "ADD_TAREFA", payload: tarefa}},
    EDIT_TAREFA: (tarefa: Tarefa, id: string) => {tarefa.id = id; return {type: "EDIT_TAREFA", payload: tarefa}},
    DELETE_TAREFA: (id: string) => {return {type: "DELETE_TAREFA", payload: id}},
}