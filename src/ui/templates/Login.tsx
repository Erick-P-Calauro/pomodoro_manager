import { useForm } from "react-hook-form";
import { BodyMedium } from "../components/Typography/BodyMedium.tsx"
import { HeadlineSmall } from "../components/Typography/HeadlineSmall.tsx"
import { useContext, useState } from "react";
import { AuthContext } from "../logic/contexts/useAuthContext.tsx";
import { ThemeContext } from "../logic/contexts/useThemeContext.tsx";
import { Link, useNavigate } from "react-router";
import { UserRepository } from "../../data/Repository/UserRepository.ts";
import { HeadlineLarge } from "../components/Typography/HeadlineLarge.tsx";

type LoginForm = {
    username: string,
    password: string,
}

export const Login = () => {

    const navigate = useNavigate();
    const [loginAction, setLoginAction] = useState(1) // 0 - Cadastrar && 1 - Editar

    const { setIsAuthenticated } = useContext(AuthContext);
    const { colors } = useContext(ThemeContext)

    const { register, handleSubmit, reset } = useForm<LoginForm>({
        defaultValues: {
            password: "",
            username: ""
        }
    });

    const handleSign = async (data: LoginForm) => {
        const ok = await UserRepository.criarUsuario(data.username, data.password);

        if(ok) {
            alert("Usuário criado com sucesso. Por favor utilize suas credenciais para efetuar o login.");
            setLoginAction(1);
            reset();
            return;
        }

        alert("Algo deu errado ao criar usuário");
    }

    const handleLogin = async (data : LoginForm) => {
        const ok = await UserRepository.efetuarLogin(data.username, data.password);
        
        if(ok) {
            setIsAuthenticated(true);
            navigate("/")
            return;
        }

        alert("Nome de usuário ou senha inválidos.")
        setIsAuthenticated(false);
    }

    return (
        <div className="w-[100vw] h-[100vh] flex justify-center ease-in-out duration-200" style={{backgroundColor: colors.secondary}}>
            <div className="
                sm-mobile:max-w-[375px] 
                lg-mobile:max-w-[715px] 
                desktop:max-w-[960px] 
                mx-2.5 flex flex-col items-center justify-center">
                
                <div className="flex items-center gap-3 mb-16">
                    <img className="w-[60px] h-[60px]" src="/assets/pomodoro.png" alt="pomodoro icon"></img>
                    <HeadlineLarge text="Pomodoro Manager" style={{color: "var(--normal)"}}/>
                </div>

                <div className="bg-normal rounded-md mb-6">
                    <div className="space-y-3">
                        <div className="w-full text-center space-y-3 mt-2">
                            {
                                loginAction == 0 ? <HeadlineSmall text="Cadastrar" style={{color: "var(--config)"}}/> : <HeadlineSmall text="Entrar" style={{color: "var(--config)"}}/>
                            }
                
                            <hr className="text-detalhes"/>
                        </div>

                        <form onSubmit={handleSubmit((data: LoginForm) => loginAction == 0 ? handleSign(data) : handleLogin(data))} className="flex flex-col mx-4 space-y-4">
                            <div className="flex flex-col space-y-2">
                                <HeadlineSmall text="Nome de Usuário" style={{color: "var(--config)"}}/>
                                <input {...register("username")} type="text" placeholder="Username" className="focus:outline-none placeholder:text-detalhes text-center text-config font-workSans drop-shadow-lg text-xl py-1 rounded-md" />
                            </div>

                            <div className="flex flex-col space-y-2">
                                <HeadlineSmall text="Senha" style={{color: "var(--config)"}}/>
                                <input {...register("password")} type="password" placeholder="********" className="focus:outline-none placeholder:text-detalhes text-center text-config font-workSans drop-shadow-lg text-xl py-1 rounded-md" />
                            </div>
                            
                            <div className="flex justify-between pt-5 pb-5">
                                <span className="max-w-3"></span>
                                <button type="submit" className="bg-config py-1 px-4 rounded-sm flex items-center justify-center">
                                    <BodyMedium text="Enviar" style={{color: "var(--normal)"}}/>
                                </button>
                                <Link to={"/"}>
                                    <div className="bg-produtividade py-1 px-4 rounded-sm flex items-center justify-center">
                                        <BodyMedium text="Cancelar" style={{color: "var(--normal)"}}/>
                                    </div>
                                </Link>
                                <span className="max-w-3"></span>
                            </div>
                        </form>
                    </div>
                </div>

                {
                    loginAction == 0 ?
                    <span className="text-normal">Já criou usuário ? <button onClick={() => setLoginAction(1)} className="underline pointer" >Efetuar login</button> </span>  
                    :
                    <span className="text-normal">Ainda não criou usuário ? <button onClick={() => setLoginAction(0)} className="underline pointer" >Criar usuário</button> </span>
                }
            </div>
        </div>
    )
}