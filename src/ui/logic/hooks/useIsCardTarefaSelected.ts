import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useIsCardTarefaSelected = (changeSelected, title, receivedIsSelected) : [boolean, Dispatch<SetStateAction<boolean>>] => {
    const [isSelected, setIsSelected] = useState(false);
    
    useEffect(() => {
        if(isSelected === true) {
            changeSelected(title);
        }

    }, [isSelected, changeSelected, title])

    useEffect(() => {
        setIsSelected(receivedIsSelected)
        
    }, [receivedIsSelected])

    return [isSelected, setIsSelected];
}