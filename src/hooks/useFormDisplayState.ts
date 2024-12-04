import { useState } from "react";

export const useFormDisplayState = () => {
    const [displayState, setDisplayState] = useState(0) // 0 => Sem aparecer || 1 => Aparecendo

    function changeDisplayState(state) {
        setDisplayState(state);
        console.log(window.document.body.offsetHeight)
    }

    return [displayState, changeDisplayState]
}