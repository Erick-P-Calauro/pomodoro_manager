import { TaskApi } from "../Api/TaskApi.ts"
import { Tarefa, TarefaCreate } from "../dto.ts";
import { UserRepository } from "./UserRepository.ts";

export const TaskRepository = {
    
    criarTarefa: async (tarefa: TarefaCreate) : Promise<boolean> => {
        const result = await TaskApi.saveTask(tarefa);

        if(!result.ok) {
            console.error("[CRIAR TAREFA] Error: " + result.error!);
            return false;
        }

        return true;
    },

    editarTarefa: async (tarefa: TarefaCreate) : Promise<boolean> => {
        const result = await TaskApi.updateTask(tarefa);

        if(!result.ok) {
            console.error("[EDITAR TAREFA] Error: " + result.error!);
            return false;
        }

        return true;
    },

    deletarTarefa : async (id: string) : Promise<boolean> => {

        const result = await TaskApi.deleteTask(id);

        if(!result.ok) {
            console.error("[DELETAR TAREFA] Error: " + result.error!);
            return false;
        }

        return true;

    },
    
    listarTarefasPorUsuario: async () : Promise<Tarefa[]> => {

        const userResult = await UserRepository.identificarUsuario();

        if(!userResult) {
            console.error("[LISTAR TAREFAS POR USUÁRIO] Error: Usuário não autenticado.");
            return [];
        }

        const result = await TaskApi.listTasksByUser(userResult!.id);

        if(!result.ok) {
            console.error("[LISTAR TAREFAS POR USUÁRIO] Error: " + result.error!);
            return [];
        }

        return result.data!;
    }
}