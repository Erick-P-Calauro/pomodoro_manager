import React from "react";
import FormTarefa from "./ui/components/Tarefa/FormTarefa/FormTarefa.tsx";
import Header from "./ui/components/Header/Header.tsx";
import Tarefa from "./ui/components/Tarefa/CardTarefa.tsx";
import Timer from "./ui/components/Timer/Timer.tsx";
import { HeaderTarefa } from "./ui/components/Tarefa/HeaderTarefa.tsx";
import { useFormDisplayState } from "./ui/hooks/useFormDisplayState.ts";
import { useThemeState } from "./ui/hooks/useTheme.ts";
import { ThemeContext } from "./ui/hooks/themeContext.ts";
import { ButtonTarefa } from "./ui/components/Tarefa/ButtonTarefa.tsx";

function App() {
  const [themeState, changeThemeState] = useThemeState()
  const [displayState, setDisplayState] = useFormDisplayState();

  return (
    <ThemeContext.Provider value={{theme: themeState, changeThemeState: changeThemeState}} >
      <div className="w-full h-full flex justify-center" style={{backgroundColor: themeState.secondary}}>
        <div className="sm-mobile:max-w-[375px] mx-2.5 pb-10 flex flex-col items-center flex-grow">
          <div className="w-full space-y-12">
            
            <div className="space-y-12">
              <Header />
              <Timer />
            </div>
            
            <div className="flex flex-col space-y-6">   
              
              <HeaderTarefa />
              <Tarefa />
              
              {
                displayState == 0 ? 
                
                <ButtonTarefa setDisplayState={setDisplayState} />
                : 
                <FormTarefa 
                  setDisplayState={setDisplayState}
                />
              }

            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
