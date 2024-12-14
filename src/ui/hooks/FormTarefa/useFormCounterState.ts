import { useState } from "react";

export const useFormCounterState = () => {
    const [counterState, setCounterState] = useState<number>(1);

    function changeCounterState(value) {
        console.log(value)

        if(value >= 0 && value <= 100) {
            setCounterState(value)
        }
    }

    return {state: counterState, change: changeCounterState}
}