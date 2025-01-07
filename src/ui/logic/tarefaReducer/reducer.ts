import { Tarefa } from "../../../data/types.ts";

export const TarefaReducer = (state : Tarefa[], action) => {
    const { type } = action;

    switch(type) {
        case "CADASTRAR_TAREFA" : {
            const newTarefa = action.payload;
            newTarefa.id = state[state.length - 1].id + 1;

            return [...state, newTarefa];
        }

        case "EDITAR_TAREFA" : {
            return [...state];
        }

        case "APAGAR_TAREFA" : {
            const newTarefas : Tarefa[] = [];

            for(let tarefa of state) {
                if(tarefa.id === action.payload) {
                    continue;
                }

                newTarefas.push(tarefa);
            }

            return newTarefas;
        }
    }

    return [...state];
}