import FormTarefa from "./components/FormTarefa.tsx";
import Header from "./components/Header.tsx";
import { HeaderTarefa } from "./components/HeaderTarefa.tsx";
import Tarefa from "./components/Tarefa.tsx";
import Timer from "./components/Timer.tsx";
import { useTheme } from "./hooks/useTheme.ts";

function App() {

  const [timerState, changeTimerState, mainColor, secondaryColor] = useTheme();

  console.log(mainColor);

  return (
    <div className="w-full h-full" style={{backgroundColor: secondaryColor}}>
      <div className="flex justify-center h-full w-full">
        <div className="mx-2.5 max-w-[960px] flex flex-col items-center flex-grow">
          <div className="w-full space-y-6 md-mobile:grid md-mobile:grid-cols-12 md-mobile:gap-x-5">
            
            <div className="md-mobile:col-start-1 md-mobile:col-end-13 space-y-12 desktop:col-start-1 desktop:col-end-9">
              <Header />
              <Timer 
                timerState={timerState} 
                changeTimerState={changeTimerState} 
                mainColor={mainColor} 
                secondaryColor={secondaryColor}
              />
            </div>
            
            <div className="flex flex-col space-y-6 
              md-mobile:col-start-2 md-mobile:col-end-12 
              lg-mobile:col-start-3 lg-mobile:col-end-11 
              desktop:col-start-9 desktop:col-end-13">   
              
              <HeaderTarefa />
              <Tarefa />
              
              <button className="mt-3 bg-textoNormal rounded-sm py-2.5">
                <span className="font-workSans font-medium text-lg" style={{color: mainColor}}>Adicionar Tarefa</span>
              </button>

              <FormTarefa />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
