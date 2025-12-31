import { Tarefa } from "../../../../data/dto";

export const TarefaReducer = (state : Tarefa[], action : { type: string, payload: any}) => {
    const { type } = action;

    switch(type) {

        case "LOAD_TAREFAS": {
            return action.payload;
        }
        
        case "ADD_TAREFA": {
            const newTarefa = action.payload;
            newTarefa.id = state.length !== 0 ? state[state.length - 1].id + 1 : 0;

            return [...state, newTarefa];
        }
        
        case "EDIT_TAREFA": {
            const nState = []

            for(let tarefa of state) {
                if(tarefa.id == action.payload.id) {
                    tarefa = action.payload;
                }

                nState.push(tarefa);
            }

            return nState;
        }

        case "DELETE_TAREFA" : {
            const nState : Tarefa[] = [];

            for(let tarefa of state) {
                if(tarefa.id === action.payload) {
                    continue;
                }

                nState.push(tarefa);
            }

            return nState;
        }
    }

    return [...state];
}