import Header from "./components/Header";
import Tarefa from "./components/Tarefa";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="flex justify-center h-full w-full">
      <div className="mx-2.5 max-w-[960px] flex flex-col items-center flex-grow flex-shrink">
        <div className="w-full space-y-12">
            <Header></Header>
            <Timer></Timer>
          
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-workSans font-semibold text-textoNormal text-xl">Tarefas</h2>
              <button className="text-textoNormal">
                <img src="/more_vert.svg"></img>
              </button>
            </div>

            <Tarefa />

            <button className="mt-3 bg-textoNormal rounded-sm py-2.5">
              <span className="font-workSans font-medium text-lg text-produtividade">Adicionar Tarefa</span>
            </button>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
