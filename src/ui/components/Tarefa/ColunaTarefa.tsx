import React from "react"
import { HeaderTarefa } from "./HeaderTarefa.tsx"
import Tarefa from "./CardTarefa.tsx"
import { ButtonTarefa } from "./ButtonTarefa.tsx"
import FormTarefa from "./FormTarefa.tsx"
import { useFormDisplayState } from "../../hooks/useFormDisplayState.ts"

export const ColunaTarefa = () => {
    const displayStateObject = useFormDisplayState();
    const displayState = displayStateObject.state;
    const setDisplayState = displayStateObject.change;

    return (
        <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">   
            
            <HeaderTarefa />
            <Tarefa />
            
            {
                displayState == 0 ? 
                
                <div className="lg-mobile:mx-auto desktop:mx-0">
                    <ButtonTarefa setDisplayState={setDisplayState} />
                </div>
                : 
                <FormTarefa setDisplayState={setDisplayState}/>
            }

        </div>
    )
}