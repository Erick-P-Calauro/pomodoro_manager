import React from "react"
import { TarefaContext } from "../../logic/contexts/useTarefaContext.tsx"

export const ColunaTarefas = ({children, initialContextValue}) => {

    return (
        <TarefaContext.Provider value={initialContextValue}>
            <div className="flex flex-col space-y-6 lg-mobile:max-w-[50%] mx-auto desktop:max-w-[100%] desktop:mx-0">     
                {children}
            </div>    
        </TarefaContext.Provider>
    )
}