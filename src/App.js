import Header from "./components/Header";
import Tarefa from "./components/Tarefa";
import Timer from "./components/Timer";

function App() {
  return (
    <div className="bg-produtividade2 flex flex-col items-center h-full w-full">
      <div className="mx-2.5 w-[960px] grid grid-cols-12 gap-x-5">
        <div className="col-start-1 col-end-9 space-y-12">
          <Header></Header>
          <Timer></Timer>
        </div>

        <div className="col-start-9 col-end-13 mt-6">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-workSans font-semibold text-textoNormal text-xl">Tarefas</h2>
              <img src="/more_vert.png"></img>
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
