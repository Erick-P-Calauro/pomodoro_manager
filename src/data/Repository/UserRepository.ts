import { UserApi } from "../Api/UserApi.ts"
import { UserResponse } from "../dto.ts";

export const UserRepository = {

    efetuarLogin : async (username: string, password: string) : Promise<boolean> => {

        const result = await UserApi.login(username, password);

        if(!result.ok) {
            console.error("[EFETUAR LOGIN] Error: " + result.error!);
            return false;
        }

        localStorage.setItem("AUTH_TOKEN", result.data);

        return true;
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