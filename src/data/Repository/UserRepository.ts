import { UserApi } from "../Api/UserApi.ts"
import { UserResponse } from "../dto.ts";

export const UserRepository = {

    criarUsuario : async (username: string, password: string) : Promise<boolean> => {
        const result = await UserApi.save(username,password);

        if(!result.ok) {
            console.error("[CRIAR USUÁRIO] Error: " + result.error!);
            return false;
        }

        return true;
    },

    efetuarLogin : async (username: string, password: string) : Promise<number> => {

        const result = await UserApi.login(username, password);

        if(!result.ok) {
            console.error("[EFETUAR LOGIN] Error: " + result.error!);
            return 0;
        }

        localStorage.setItem("AUTH_TOKEN", result.data!.token);

        return result.data!.expiresIn;
    },

    identificarUsuario: async (): Promise<UserResponse | undefined> => {
        const result = await UserApi.findUserByToken();

        if(!result.ok) {
            console.error("[IDENTIFICAR USUÁRIO] Error: " + result.error!);
            return undefined;
        }

        return result.data!;
    }

}