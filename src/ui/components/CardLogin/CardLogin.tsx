import { Modal } from "../Modal/Modal.tsx"
import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx";
import { useForm } from "react-hook-form";
import { BodyMedium } from "../Typography/BodyMedium.tsx";
import { UserRepository } from "../../../data/Repository/UserRepository.ts";
import { useContext } from "react";
import { AuthContext } from "../../logic/contexts/useAuthContext.tsx";

export type CardLoginForm = {
    username: string,
    password: string,
}

export const CardLogin = ({ setIsLoginOpen } : any) => {

    const { setIsAuth } = useContext(AuthContext);

    const { register, handleSubmit } = useForm<CardLoginForm>({
        defaultValues: {
            password: "",
            username: ""
        }
    });

    const handleCardLoginForm = async (data : CardLoginForm) => {
        const ok = await UserRepository.efetuarLogin(data.username, data.password);
        
        if(ok) {
            setIsAuth(true);
            setIsLoginOpen(false);
            return;
        }

        setIsAuth(false);
    }

    return (
        <Modal>
            <div className="space-y-3">
                <div className="w-full text-center space-y-3 mt-2">
                    <HeadlineSmall text="Entrar" style={{color: "var(--config)"}}/>
        
                    <hr className="text-detalhes"/>
                </div>

                <form onSubmit={handleSubmit((data : CardLoginForm) => handleCardLoginForm(data))} className="flex flex-col mx-4 space-y-4">
                    <div className="flex flex-col space-y-1">
                        <HeadlineSmall text="Nome de Usuário" style={{color: "var(--config)"}}/>
                        <input {...register("username")} type="text" placeholder="Username" className="focus:outline-none placeholder:text-detalhes text-center text-config font-workSans drop-shadow-lg text-xl py-1 rounded-md" />
                    </div>

                    <div className="flex flex-col space-y-1">
                        <HeadlineSmall text="Senha" style={{color: "var(--config)"}}/>
                        <input {...register("password")} type="password" placeholder="********" className="focus:outline-none placeholder:text-detalhes text-center text-config font-workSans drop-shadow-lg text-xl py-1 rounded-md" />
                    </div>
                    
                    <div className="flex justify-between pt-5 pb-5">
                        <span className="max-w-3"></span>
                        <button type="submit" className="bg-config py-1 px-4 rounded-sm flex items-center justify-center">
                            <BodyMedium text="Enviar" style={{color: "var(--normal)"}}/>
                        </button>
                        <button type="button" className="bg-produtividade py-1 px-4 rounded-sm flex items-center justify-center" onClick={() => setIsLoginOpen(false)}>
                            <BodyMedium text="Cancelar" style={{color: "var(--normal)"}}/>
                        </button>
                        <span className="max-w-3"></span>
                    </div>
                </form>
            </div>

        </Modal>
    );
}