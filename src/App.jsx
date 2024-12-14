import React from "react";
import Header from "./ui/components/Header/Header.tsx";
import Timer from "./ui/components/Timer/Timer.tsx";
import { useThemeState } from "./ui/hooks/useTheme.ts";
import { ThemeContext } from "./ui/hooks/themeContext.ts";
import { ColunaTarefa } from "./ui/components/Tarefa/ColunaTarefa.tsx";

function App() {
  const [themeState, changeThemeState] = useThemeState()
  
  return (
    <ThemeContext.Provider value={{theme: themeState, changeThemeState: changeThemeState}} >
      <div className="w-full h-full flex justify-center" style={{backgroundColor: themeState.secondary}}>
        <div className="
            sm-mobile:max-w-[375px] 
            lg-mobile:max-w-[700px] 
            desktop:max-w-[960px] 
            mx-2.5 pb-10 flex flex-col items-center flex-grow">
          
          <div className="w-full space-y-12 desktop:space-x-5 
            desktop:grid desktop:grid-cols-3 desktop:space-y-6">
            
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
