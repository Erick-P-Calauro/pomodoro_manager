import { useEffect, useState } from "react";

export const useFormCounterState = (setValue): [number, (number) => void] => {
    const [counterState, setCounterState] = useState<number>(1);

    function changeCounterState(value : number) {
        console.log(value)

        if(value >= 1 && value <= 100) {
            setCounterState(value)
        }
    }

    useEffect(() => {
        setValue("productivityGoal", counterState)

    }, [counterState, setValue])

    return [counterState, changeCounterState]
}