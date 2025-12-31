import { useContext, useEffect ,useReducer,useState } from "react"
import { FormTarefa } from "./FormTarefa.tsx"
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx"
import { Tarefa } from "../../../data/dto.ts"
import * as constants from "../../types/timer-constants.ts";
import { TarefaContext, TarefaStateType } from "./Logic/TarefaContext.tsx"
import { HeadlineMedium } from "../Typography/HeadlineMedium.tsx"
import { CardTarefa } from "./CardTarefa.tsx"
import { BodyMedium } from "../Typography/BodyMedium.tsx"
import { TaskRepository } from "../../../data/Repository/TaskRepository.ts";
import { AuthContext } from "../../logic/contexts/useAuthContext.tsx";
import { SettingsContext } from "../../logic/contexts/useSettingsContext.tsx";
import { TarefaReducer } from "./Logic/TarefaReducer.ts";
import { TarefaActions } from "./Logic/TarefaActions.ts";

export const Tarefas = () => {

    const { isAuthenticated } = useContext(AuthContext);
    const { settings } = useContext(SettingsContext);
    const { colors, status } = useContext(ThemeContext);
    
    const [isFormVisible, setIsFormVisible] = useState(false) // Estado de visibilidade de Tarefas (Botão de adicionar ou Formulário
    const [tarefas, dispatchTarefas] = useReducer(TarefaReducer, []);// CRUD de Tarefas
    const [formTarget, setTarget] = useState<Tarefa>() // Tarefa para edição

    const sincronizarTarefas = async () => {
        TaskRepository.listarTarefasPorUsuario().then((tarefas) => dispatchTarefas(TarefaActions.LOAD_TAREFA(tarefas)));
    }

    const tarefaContext : TarefaStateType = {
        ativarFormulario : () => setIsFormVisible(true),
        desativarFormulario: () => {
            setTarget(undefined);
            setIsFormVisible(false);
        },
        sincronizarTarefas : () => sincronizarTarefas(),
        selecionarTarefa: (tarefa : Tarefa | undefined)  => {
            setTarget(tarefa);
            setIsFormVisible(true);
        },
        // Consultar Tarefas/Logic/TarefaActions.ts
        dispatchTarefas : (value: {type: string, payload: any}) => dispatchTarefas(value)
    };
    
    // Refresh e Load das tarefas
    useEffect(() => {
        if(isAuthenticated) {
            sincronizarTarefas();
        }
         
    }, [isAuthenticated])

    // Manipulação do estado a partir das sessões de produtividade
    useEffect(() => {

        if(Notification.permission === "granted") {
            switch(status) {

                // Lógica de contagem de produtividade
                // Se estiver autenticado manda pro backend
                // Se não estiver faz o cálculo local e efêmero
                case constants.TO_SHORT:
                case constants.TO_LONG: {

                    new Notification("Sua sessão de produtividade acabou !");

                    if(tarefas.length > 0) {
                        for(let tarefa of tarefas) {
                            if(tarefa.productivityDone < tarefa.productivityGoal) {
                                if(isAuthenticated) {
                                    TaskRepository.adicionarProdutividade(tarefas[0].id, settings.timer.productivity).then(() => sincronizarTarefas())
                                    break;
                                }

                                tarefa.productivityDone = tarefa.productivityDone + 1;
                                dispatchTarefas(TarefaActions.EDIT_TAREFA(tarefa, tarefa.id));
                                break;
                            }
                        }
                    }

                    break;
                }
                case constants.TO_PRODUCTIVITY_SHORT: {
                    new Notification("Sua sessão de descanso curto acabou !");
                    break;
                }
                case constants.TO_PRODUCTIVITY_LONG: {
                    new Notification("Sua sessão de descanso longo acabou !");
                    break;
                }
            }
        }

    }, [status])

    return (
        <TarefaContext.Provider value={tarefaContext}>
            <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">     
                
                {/* Header Tarefas */}
                <div className="flex items-center justify-between">
                    <HeadlineMedium text="Tarefas" style={{color: "var(--normal)"}}/>
                    
                    <button className="text-normal w-[25px] h-[23px]">
                        <img src="/assets/more_vert.svg" alt="menu icon"></img>
                    </button>
                </div>
                
                {
                    // Tarefa Card List
                    tarefas.map((tarefa : Tarefa) => {
                        return <CardTarefa 
                                key={tarefa.id}
                                tarefa={tarefa}/>
                    }) 
                }
                
                {
                    isFormVisible === false ? 
                    <div className="lg-mobile:mx-auto desktop:mx-0">
                        <button onClick={() => setIsFormVisible(true)} 
                            className="mt-3 bg-normal rounded-sm py-2.5 w-full shadow-lgBoxShadow lg-mobile:px-11 lg-mobile:py-2.5">
                            
                            <BodyMedium text="Adicionar Tarefa" style={{color: colors.secondary}}/>
                        </button>
                    </div> 
                    : 
                    <FormTarefa tarefaSelecionada={formTarget} />
                }
            </div>
        </TarefaContext.Provider>
    )
}