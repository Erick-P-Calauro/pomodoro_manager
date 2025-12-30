import { useContext } from "react";
import { BodyExtraSmall } from "../Typography/BodyExtraSmall.tsx";
import { HeadlineLarge } from "../Typography/HeadlineLarge.tsx";
import { HeaderButton } from "./HeaderButton.tsx";
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx";
import { AuthContext } from "../../logic/contexts/useAuthContext.tsx";
import { Link } from "react-router";

function Header({ openSettingsModal } : any) {

    const { isAuthenticated, setIsAuthenticated} = useContext(AuthContext);
    const { colors } = useContext(ThemeContext);

    const handleUnathenticate = () => {
        localStorage.setItem("AUTH_TOKEN", "-1");
        setIsAuthenticated(false);
    }

    return (
        <div className="flex items-center justify-between py-6">
            
            { /* Título e Ícone do pomodoro manager */}
            <div className="flex items-center gap-3">
                <img className="w-[60px] h-[60px]" src="/assets/pomodoro.png" alt="pomodoro icon"></img>
                <HeadlineLarge text="Pomodoro Manager" style={{color: "var(--normal)", maxWidth: "155px"}}/>
            </div>

            {/* Barra de botões (Login e Configurações) */}
           <div className="flex items-center gap-5">

                {
                    !isAuthenticated ? (
                        <Link to={"/login"}>
                            <HeaderButton style={{backgroundColor: colors.main}}>
                                <img className="max-w-6" src="/assets/generic-avatar.png" alt="login icon" />

                                <div className="items-center sm-mobile:hidden lg-mobile:flex">
                                    <BodyExtraSmall text="Entrar" style={{color: ("var(--normal)")}} />
                                </div>
                            </HeaderButton>
                        </Link>
                    ) 
                    : 
                    (
                         <HeaderButton style={{backgroundColor: colors.main}} trigger={() => handleUnathenticate()}>
                            <img className="max-w-6" src="/assets/generic-avatar.png" alt="login icon" />

                            <div className="items-center sm-mobile:hidden lg-mobile:flex">
                                <BodyExtraSmall text="Sair" style={{color: ("var(--normal)")}} />
                            </div>
                        </HeaderButton>
                    )
                }

                <HeaderButton style={{backgroundColor: colors.main}} trigger={() => openSettingsModal(true)}>
                    <img src="/assets/settings.svg" alt="general settings icon" />
                    
                    <div className="items-center sm-mobile:hidden lg-mobile:flex">
                        <BodyExtraSmall text="Configurações" style={{color: ("var(--normal)")}} />
                    </div>
                </HeaderButton>
            </div>        
        </div>
    );
}

export default Header;