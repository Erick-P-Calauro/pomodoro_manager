import { GenericApiError, Tarefa, TarefaCreate } from "../dto";
import { API_BASE } from "../env";

export const TaskApi = {

    saveTask: async (tarefa: TarefaCreate) => {
        try {

            const token = localStorage.getItem("AUTH_TOKEN");

            const response = await fetch(`${API_BASE}/task/save`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tarefa),
            })

            if(!response.ok) {
                const { error } = await response.json();

                return {
                    ok: false,
                    error: error,
                }

            }

            return {
                ok: true,
                data: null
            }

        }catch(e) {
            return {
                ok: false,
                error: e instanceof Error ? e.message: "Erro interno do servidor."
            }
        }
    },

    updateTask : async (tarefa: TarefaCreate) => {
        try {
            const token = localStorage.getItem("AUTH_TOKEN");

            const response = await fetch(`${API_BASE}/task/edit/${tarefa.id}`, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(tarefa)
            })

            if(!response.ok) {
                const { error } = await response.json();

                return {
                    ok: false,
                    error: error,
                }

            }

            return {
                ok: true,
                data: null
            }

        }catch(e) {
            return {
                ok: false,
                error: e instanceof Error ? e.message: "Erro interno do servidor."
            }
        }
    },

    deleteTask : async (id: string) => {
        try {
            const token = localStorage.getItem("AUTH_TOKEN");

            const response = await fetch(`${API_BASE}/task/delete/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            })

            if(!response.ok) {
                const { error } = await response.json();

                return {
                    ok: false,
                    error: error,
                }

            }

            return {
                ok: true,
                data: null
            }

        }catch(e) {
            return {
                ok: false,
                error: e instanceof Error ? e.message: "Erro interno do servidor."
            }
        }
    },

    listTasksByUser : async (id: string) : Promise<
        {
            ok: boolean,
            data: Tarefa[],
            error?: undefined,
        } | GenericApiError
    > => {

        try {

            const token = localStorage.getItem("AUTH_TOKEN");

            const response = await fetch(`${API_BASE}/task/list/${id}`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })

            if(!response.ok) {
                const { error } = await response.json();

                return {
                    ok: false,
                    error: error,
                }

            }

            return {
                ok: true,
                data: await response.json()
            }
        }catch(e) {
            return {
                ok: false,
                error: e instanceof Error ? e.message: "Erro interno do servidor."
            }
        }

    }
}