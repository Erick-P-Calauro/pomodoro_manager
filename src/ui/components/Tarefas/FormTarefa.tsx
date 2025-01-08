import React, { useContext, useState } from "react"
import { BodyExtraSmall } from "../Typography/BodyExtraSmall.tsx";
import { BodyMedium } from "../Typography/BodyMedium.tsx";
import { TarefaContext } from "../../logic/contexts/useTarefaContext.tsx";
import { useForm } from "react-hook-form";
import { useHandleTarefaEdit } from "../../logic/FormTarefa/useHandleTarefaEdit.ts";
import { handleTarefaForm } from "../../logic/FormTarefa/handleTarefaForm.ts";

export type TarefaFormData = {
    id: number,
    title: string,
    description: string,
    productivityGoal: number,
    productivityDone: number,
}

export const FormTarefa = ({ formTarget, setFormTarget, setTarefaSelected }) => {
    const { register, handleSubmit, setValue, watch } = useForm<TarefaFormData>({
        defaultValues: {
            id: -1,
            title: "",
            description: "",
            productivityGoal: 0,
            productivityDone: 0
        }
    });

    useHandleTarefaEdit({formTarget, setFormTarget, setValue, setTarefaSelected})

    const [ formDisplayState, setFormDisplayState ] = useState(0);
    const counter = watch("productivityGoal");

    const { changeDisplay, dispatchTarefas} = useContext(TarefaContext);

    return (
        <form onSubmit={handleSubmit(data => handleTarefaForm({data, setDisplayState: changeDisplay, dispatchTarefas}))}>
            
            <input {...register("id")} style={{display: "none"}} />
            <input {...register("productivityDone")} style={{display: "none"}} />
            
            <div className="bg-normal w-full h-fit rounded-[4px] pt-6">
                <div className="px-4 space-y-5">
                    <input className="
                        w-full pb-1 bg-normal font-workSans text-config font-medium border-b-2 border-detalhes text-lg lg-mobile:text-xl  
                        focus:outline-none focus:text-xl focus:pb-2
                        placeholder:text-detalhes" 
                        placeholder="Título da Tarefa" {...register("title")}/>

                    <div className="space-y-3">
                        <BodyMedium text="Seções de Produtividade" style={{color: "var(--config)"}}/>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center space-x-1.5">
                                
                                <input {...register("productivityGoal", { max: 100 })} 
                                    className="focus:outline-none w-9 placeholder:text-detalhes text-center text-config font-workSans drop-shadow-lg" 
                                />
                                
                                <button type="button" onClick={() => setValue("productivityGoal", counter * 1 + 1)} className="bg-normal drop-shadow-lg">
                                    <img src="/assets/arrow_drop_up.svg" alt="plus counter icon" />
                                </button>

                                <button type="button" onClick={() => setValue("productivityGoal", counter * 1 - 1)} className="bg-normal drop-shadow-lg">
                                    <img src="/assets/arrow_drop_down.svg" alt="minus counter icon" />
                                </button>
                            </div>
                            
                            <select name="tarefa-project" className="flex flex-grow text-center text-[10px] lg-mobile:text-xs text-config py-1 font-workSans drop-shadow-lg">
                                <option>Sem Projeto</option>
                            </select>
                        </div>
                    </div>

                    {
                        formDisplayState === 1 ?
                        <textarea  
                            placeholder="Descrição da tarefa..." 
                            className="text-config text-[10px] lg-mobile:text-xs drop-shadow-lg w-full rounded-sm px-3 py-3
                                focus:outline-none" {...register("description")}/>
                        :
                        <></>
                    }

                </div> 
                
                <div className="bg-detalhes py-4 px-4 flex items-center justify-between mt-7 rounded-b-[4px] gap-4">
                    { formDisplayState === 0 ? // FormState == 0 => Estado Inicial (Sem textarea de descrição e com botão de nova descrição)
                        <button type="button" onClick={() => setFormDisplayState(1)} className="bg-detalhes drop-shadow-lg px-3 py-1.5 rounded-sm text-center">
                            <BodyExtraSmall text="Nova descrição" style={{color: "var(--normal)"}} />
                        </button> 
                        : 
                        <div></div>
                    }

                    <div className="flex items-center gap-3 lg-mobile:gap-4">
                        <button type="button" onClick={() => changeDisplay(0)} className="py-1">
                            <BodyExtraSmall text="Cancelar" style={{color: "var(--normal)"}} />
                        </button>

                        <button type="submit" className="bg-config py-1 px-2.5 rounded-sm flex items-center justify-center">
                            <BodyExtraSmall text="Salvar" style={{color: "var(--normal)"}} />
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}