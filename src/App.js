import Header from "./components/Header";
import Tarefa from "./components/Tarefa";
import Timer from "./components/Timer";
import useTimerState from "./hooks/useTimerState";

function App() {

  return (
    <div className="flex justify-center h-full w-full">
      <div className="mx-2.5 max-w-[960px] flex flex-col items-center flex-grow">
        <div className="w-full space-y-6 md-mobile:grid md-mobile:grid-cols-12 md-mobile:gap-x-5">
          <div className="md-mobile:col-start-1 md-mobile:col-end-13 space-y-12 desktop:col-start-1 desktop:col-end-9">
            <Header></Header>
            <Timer></Timer>
          </div>
          
          <div className="flex flex-col space-y-6 md-mobile:col-start-2 md-mobile:col-end-12 lg-mobile:col-start-3 lg-mobile:col-end-11 desktop:col-start-9 desktop:col-end-13">   
            <div className="flex items-center justify-between">
              <h2 className="font-workSans font-semibold text-textoNormal text-xl">Tarefas</h2>
              <button className="text-textoNormal">
                <img src="/more_vert.svg"></img>
              </button>
            </div>

            <Tarefa />

            <button className="mt-3 bg-textoNormal rounded-sm py-2.5">
              <span className="font-workSans font-medium text-lg text-main">Adicionar Tarefa</span>
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
