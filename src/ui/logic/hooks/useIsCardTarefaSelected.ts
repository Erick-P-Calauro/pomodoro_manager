import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useIsCardTarefaSelected = (id, changeSelected, receivedIsSelected) : [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [isSelected, setIsSelected] = useState(false);
    
    useEffect(() => {
        if(isSelected === true) {
            changeSelected(id);
        }

    }, [isSelected, changeSelected, id])

    useEffect(() => {
        setIsSelected(receivedIsSelected)
        
    }, [receivedIsSelected])

    return [isSelected, setIsSelected];
}