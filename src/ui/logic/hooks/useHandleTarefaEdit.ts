import { useEffect } from "react";
import { Tarefa } from "../../../data/types";
import { UseFormSetValue } from "react-hook-form";
import { TarefaFormData } from "../../components/Tarefas/FormTarefa";

export const useHandleTarefaEdit = ({
    formTarget, 
    setFormTarget, 
    setValue

}: {
    formTarget: Tarefa,
    setFormTarget: React.Dispatch<React.SetStateAction<Tarefa | undefined>>,
    setValue: UseFormSetValue<TarefaFormData>

}) => {
    
    useEffect(() => {
    
        if(formTarget !== undefined) {
            const { id, title, description, productivityDone, productivityGoal} = formTarget;
    
            setValue("id", id)
            setValue("title", title)
            setValue("description", description)
            setValue("productivityGoal", productivityGoal);
            setValue("productivityDone", productivityDone)

            // Serve para limpar os campos do formulário
            setFormTarget(undefined);
        }

    }, [formTarget, setValue, setFormTarget])
}