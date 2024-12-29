import React from "react";
import Header from "../components/Header/Header.tsx";
import Timer from "../components/Timer/Timer.tsx";
import { ColunaTarefa } from "../components/Tarefa/ColunaTarefa.tsx";
import { useThemeState } from "../logic/hooks/useTheme.ts";
import { ThemeContext } from "../logic/contexts/useThemeContext.tsx";

function App() {
  const [ themeState, setThemeState ] = useThemeState()

  return (
    <ThemeContext.Provider value={{...themeState, changeThemeState: setThemeState}} >
      <div className="w-full h-full flex justify-center" style={{backgroundColor: themeState?.colors.secondary}}>
        <div className="
            sm-mobile:max-w-[375px] 
            lg-mobile:max-w-[715px] 
            desktop:max-w-[960px] 
            mx-2.5 pb-10 flex flex-col items-center flex-grow">
          
          <div className="w-full space-y-12 
            desktop:space-x-5 desktop:grid desktop:grid-cols-3 desktop:space-y-6">
            
            <div className="space-y-12 desktop:col-start-1 desktop:col-end-3">
              <Header />
              <Timer />
            </div>
            
            <ColunaTarefa />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
