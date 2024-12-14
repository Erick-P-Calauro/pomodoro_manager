import React from "react";
import { useFormDisplayState } from "../../../hooks/useFormDisplayState.ts";
import { BodyExtraSmall } from "../../Typography/BodyExtraSmall.tsx";

function FormTarefa({...props}: (number) => void) {
    const [formState, changeFormState] = useFormDisplayState();

    return (
        <form action="#">
            <div className="bg-normal w-full h-fit rounded-[4px] pt-6">
                <div className="px-4 space-y-5">
                    <input className="
                        w-full pb-1 bg-normal font-workSans text-config font-medium border-b-2 border-detalhes text-lg  
                        focus:outline-none focus:text-xl focus:pb-2
                        placeholder:text-detalhes" 
                        type="text" 
                        placeholder="Título da Tarefa"/>

                    <div className="space-y-3">
                        <span className="font-workSans font-medium text-sm text-config">Seções de Produtividade</span>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center space-x-1.5">
                                <input className="focus:outline-none w-9 
                                placeholder:text-detalhes 
                                text-center text-config 
                                font-workSans drop-shadow-lg" type="number" min="1" placeholder="1" />
                                
                                <button className="bg-normal drop-shadow-lg">
                                    <img src="/arrow_drop_up.svg" />
                                </button>

                                <button className="bg-normal drop-shadow-lg">
                                    <img src="/arrow_drop_down.svg" />
                                </button>
                            </div>
                            
                            <select className="flex flex-grow text-center text-[10px] text-config py-1 font-workSans drop-shadow-lg">
                                <option>Sem Projeto</option>
                            </select>
                        </div>
                    </div>

                    {
                        formState == 1 ?
                        <textarea 
                        id="input-textarea" 
                        placeholder="Descrição da tarefa..." 
                        className="text-config text-[10px] drop-shadow-lg w-full rounded-sm px-3 py-3
                            focus:outline-none"/>
                        :
                        <></>
                    }

                </div>

                    
                    <div className="bg-detalhes py-4 px-4 flex items-center justify-between mt-7 rounded-b-[4px]">
                        { formState == 0 ? // FormState == 0 => Estado Inicial (Sem textarea de descrição e com botão de nova descrição)
                            <button onClick={() => changeFormState(1)} className="bg-detalhes drop-shadow-lg px-3 py-1.5 rounded-sm text-center">
                                <BodyExtraSmall text="Nova descrição" style={{color: "var(--normal)"}} />
                            </button> 
                            : 
                            <div></div>
                        }

                        <div className="flex items-center gap-3">
                            <button onClick={() => props.setDisplayState(0)} className="py-1">
                                <BodyExtraSmall text="Cancelar" style={{color: "var(--normal)"}} />
                            </button>

                            <button className="bg-config py-1 px-2.5 rounded-sm flex items-center justify-center">
                                <BodyExtraSmall text="Salvar" style={{color: "var(--normal)"}} />
                            </button>
                        </div>
                    </div>
            </div>
        </form>
    );
}

export default FormTarefa;