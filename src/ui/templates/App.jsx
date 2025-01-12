import React, { useContext, useState } from "react";
import Header from "../components/Header/Header.tsx";
import Timer from "../components/Timer/Timer.tsx";
import { ThemeContext } from "../logic/contexts/useThemeContext.tsx";
import { Tarefas } from "../components/Tarefas/Tarefas.tsx";
import { SettingsModal } from "../components/SettingsModal/SettingsModal.tsx";

function App() {

  const [isSettingsOpen , setIsSettingsOpen ] = useState(false);
  // const [isReportOpen, setIsReportOpen ] = useState(false);

  const { colors } = useContext(ThemeContext);

  return (
    <div className="w-full h-full flex justify-center ease-in-out duration-200" style={{backgroundColor: colors.secondary}}>
      <div className="
          sm-mobile:max-w-[375px] 
          lg-mobile:max-w-[715px] 
          desktop:max-w-[960px] 
          mx-2.5 pb-10 flex flex-col items-center flex-grow">
        
        <div className="w-full space-y-12 
          desktop:space-x-5 desktop:grid desktop:grid-cols-3 desktop:space-y-6">

          <div className="space-y-12 desktop:col-start-1 desktop:col-end-3">
            <Header openSettingModal={setIsSettingsOpen}/>
            <Timer />
          </div>
          
          <Tarefas />
        </div>
      </div>

      { isSettingsOpen ? <SettingsModal setIsOpen={setIsSettingsOpen} /> : <></>}
    </div>
  );
}

export default App;
