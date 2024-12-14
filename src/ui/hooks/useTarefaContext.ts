import { createContext } from "react";
import { TarefaContextType} from "../../data/types.ts";

const tarefaValue: TarefaContextType = {changeDisplay: () => {}, changeTarefas: () => {}, tarefas: []};
export const TarefaContext = createContext(tarefaValue);