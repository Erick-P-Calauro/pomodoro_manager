import { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header.tsx";
import Timer from "../components/Timer/Timer.tsx";
import { ThemeContext } from "../logic/contexts/useThemeContext.tsx";
import { Tarefas } from "../components/Tarefas/Tarefas.tsx";
import { SettingsModal } from "../components/SettingsModal/SettingsModal.tsx";
import { SettingsProvider } from "../logic/contexts/useSettingsContext.tsx";
import { Settings } from "../../data/types.ts";
import { defaultSettings } from "../../utils/settings.ts";
import { CardLogin } from "../components/CardLogin/CardLogin.tsx";
import chroma from "chroma-js";
import { AuthContextProvider } from "../logic/contexts/useAuthContext.tsx";

function App() {
  
  // Gerenciamento de Contextos
  const [settings, setSettings] = useState<Settings>(defaultSettings);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Lógica de UI
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [isSettingsOpen , setIsSettingsOpen ] = useState<boolean>(false);

  const { colors } = useContext(ThemeContext);

  // Resgata o AUTH TOKEN do localStorage ao reiniciar a página
  useEffect(() => {

    const authToken = localStorage.getItem("AUTH_TOKEN");

    if(authToken !== "-1" && authToken !== null) {
      setIsAuthenticated(true);
    }

  }, [])

  // Efeito responsável por definir os temas com base nas configurações do usuário
  useEffect(() => {

    const { theme } = settings;
    const { productivity, short, long } = theme;

    // Cores Primárias
    document.documentElement.style.setProperty("--produtividade", productivity)
    document.documentElement.style.setProperty("--descansoCurto", short);
    document.documentElement.style.setProperty("--descansoLongo", long);
    
    // Cores Secundárias
    document.documentElement.style.setProperty("--produtividade2", String(chroma(productivity).darken(0.4)))
    document.documentElement.style.setProperty("--descansoCurto2", String(chroma(short).darken(0.4)))
    document.documentElement.style.setProperty("--descansoLongo2", String(chroma(long).darken(0.4)))
  
  }, [settings])

  return (
    <SettingsProvider value={{settings: settings, changeSettings: setSettings}}>
      <div className="w-full h-full flex justify-center ease-in-out duration-200" style={{backgroundColor: colors.secondary}}>
        <div className="
            sm-mobile:max-w-[375px] 
            lg-mobile:max-w-[715px] 
            desktop:max-w-[960px] 
            mx-2.5 pb-10 flex flex-col items-center flex-grow">
          
          <div className="w-full space-y-12 
            desktop:space-x-5 desktop:grid desktop:grid-cols-3 desktop:space-y-6">

            <div className="space-y-12 desktop:col-start-1 desktop:col-end-3">
              <AuthContextProvider value={{
                isAuth: isAuthenticated,
                setIsAuth: setIsAuthenticated }}>
                
                <Header 
                  openLoginModal={setIsLoginOpen} 
                  openSettingsModal={setIsSettingsOpen}
                />

                { isLoginOpen ? <CardLogin setIsLoginOpen={setIsLoginOpen} /> : <></>}
              </AuthContextProvider>
              <Timer />
            </div>
            
            <Tarefas />
          </div>
        </div>

        { isSettingsOpen ? <SettingsModal setIsOpen={setIsSettingsOpen} /> : <></>}
      </div>
    </SettingsProvider>
  );
}

export default App;
