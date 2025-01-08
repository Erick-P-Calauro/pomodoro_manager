import { useEffect } from "react";
import { Tarefa } from "../../../data/types";
import { UseFormSetValue } from "react-hook-form";
import { TarefaFormData } from "../../components/Tarefas/FormTarefa";

export const useHandleTarefaEdit = ({
    formTarget, 
    setFormTarget, 
    setValue,
    setTarefaSelected,

}: {
    formTarget: Tarefa,
    setFormTarget: React.Dispatch<React.SetStateAction<Tarefa | undefined>>,
    setValue: UseFormSetValue<TarefaFormData>
    setTarefaSelected: React.Dispatch<React.SetStateAction<number>>,

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

        // Retira o menu da tela
        setTarefaSelected(-1);

    }, [formTarget, setValue, setFormTarget, setTarefaSelected])
}