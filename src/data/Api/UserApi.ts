import { API_BASE } from "../env"

export const UserApi = {
    login: async (username : string, password : string) => {
        try {
            const response = await fetch(`${API_BASE}/user/login`, {
                method: "POST",
                headers: {
                    // "Access-Conrol-Allow-Origin": "*",
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            })

            if(!response.ok) {
                const { error } = await response.json();

                return {
                    ok: false,
                    error: error
                }
            }

            const { token, expiresIn } = await response.json();

            return {
                ok: true,
                data: {
                    token: token,
                    expiresIn: expiresIn
                }
            }

        }catch(e) {
            return {
                ok: false,
                error: e instanceof Error ? e.message : "Erro interno do servidor."
            }
        }
    },

    findUserByToken: async () => {
        try {
            const token = localStorage.getItem("AUTH_TOKEN");
            const response = await fetch(`${API_BASE}/user/`, {
                method: "GET",
                headers: {
                    "Authorization" : "Bearer " + token,
                    "Content-Type" : "application/json"
                },
            })

            if(!response.ok) {
                const { error } = await response.json();

                return {
                    ok: false,
                    error: error
                }
            }


            return {
                ok: true,
                data: await response.json()
            }

        }catch(e) {
            return {
                ok: false,
                error: e instanceof Error ? e.message : "Erro interno do servidor."
            }
        }
    }
}