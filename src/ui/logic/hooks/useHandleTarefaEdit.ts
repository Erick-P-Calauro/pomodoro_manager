import { useEffect } from "react";

export const useHandleTarefaEdit = (formTarget, setValue) => {
    useEffect(() => {
    
        if(formTarget !== undefined) {
            const { id, title, description, productivityDone, productivityGoal} = formTarget;
    
            setValue("title", title)
            setValue("productivityGoal", productivityGoal)
            setValue("description", description)
    
            setValue("id", id)
            setValue("productivityDone", productivityDone)
        }

    }, [formTarget, setValue])
}