import { useState } from "react";

export const useFormCounterState = (): [number, (number) => void] => {
    const [counterState, setCounterState] = useState<number>(1);

    function changeCounterState(value : number) {
        // console.log(value)

        if(value >= 0 && value <= 100) {
            setCounterState(value)
        }
    }

    return [counterState, changeCounterState]
}