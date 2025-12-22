import { useContext, useEffect,useReducer,useState } from "react"
import { FormTarefa } from "./FormTarefa.tsx"
import { ThemeContext } from "../../logic/contexts/useThemeContext.tsx"
import { Tarefa } from "../../../data/dto.ts"
import * as constants from "../../types/timer-constants.ts";
import { TarefaContext, TarefaStateType } from "./TarefaContext.tsx"
import { HeadlineMedium } from "../Typography/HeadlineMedium.tsx"
import { CardTarefa } from "./CardTarefa.tsx"
import { BodyMedium } from "../Typography/BodyMedium.tsx"
import { TaskRepository } from "../../../data/Repository/TaskRepository.ts";
import { AuthContext } from "../../logic/contexts/useAuthContext.tsx";

export const Tarefas = () => {

    const { isAuth } = useContext(AuthContext);
    const { colors, status } = useContext(ThemeContext);
    
    const [needReload, setNeedReload] = useState(false);
    const [isFormVisible, setIsFormVisible] = useState(false) // Estado de visibilidade de Tarefas (Botão de adicionar ou Formulário
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);// CRUD de Tarefas
    const [formTarget, setTarget] = useState<Tarefa>() // Tarefa para edição

    const tarefaContext : TarefaStateType = {
        tarefas: tarefas,
        cadastrar: async (tarefa) => {
            await TaskRepository.criarTarefa(tarefa);
            setIsFormVisible((v) => !v);
            setNeedReload((t) => !t);
        },
        editar: async (tarefa) => {
            await TaskRepository.editarTarefa(tarefa);
            setIsFormVisible((v) => !v);
            setNeedReload((t) => !t);
        },
        apagar: async (id) =>  {
            await TaskRepository.deletarTarefa(id);
            setIsFormVisible((v) => !v);
            setNeedReload((t) => !t);
        },
        selecionar: (tarefa) => setTarget(tarefa),
    };
    
    // Refresh e Load das tarefas
    useEffect(() => {
        isAuth ? TaskRepository.listarTarefasPorUsuario().then((tarefas) => { setTarefas(tarefas)}) : setTarefas([])

    }, [needReload, isAuth])

    // Manipulação do estado a partir das sessões de produtividade
    useEffect(() => {
        
        if( (status === constants.TO_SHORT || status === constants.TO_LONG) && tarefas.length !== 0) {    
            tarefas[0].productivityDone++;
        }

        if(Notification.permission === "granted") {
            switch(status) {
                case constants.TO_SHORT:
                case constants.TO_LONG: {
                    new Notification("Sua sessão de produtividade acabou !");
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

    }, [status, tarefas])

    // Manipulação do formulário para caso haja edição
    useEffect(() => {
        
        if(formTarget !== undefined) {
            setIsFormVisible(true);
        }

    }, [formTarget])

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
                    tarefas.map((tarefa) => {
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
                    <FormTarefa 
                        formTarget={formTarget} 
                        setFormTarget={setTarget} 
                        changeFormVisibility={() => setIsFormVisible((visibility) => !visibility)}
                    />
                }
            </div>
        </TarefaContext.Provider>
    )
}