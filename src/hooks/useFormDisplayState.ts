import { useState } from "react";

export const useFormDisplayState = () => {
    const [displayState, setDisplayState] = useState(0) // 0 => Estado Inicial || 1 => Aparecendo

    function changeDisplayState(state) {
        setDisplayState(state);
    }

    return [displayState, changeDisplayState]
}