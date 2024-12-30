import React from "react";
import { BodyLarge } from "../Typography/BodyLarge"

export const TimerControlButton = ({style, controlFunction = () => console.log("Timer Start...")}) => {
    return (
        <button onClick={controlFunction} 
            className="bg-normal rounded-sm flex items-center justify-center 
            shadow-lgBoxShadow py-1.5 px-6 lg-mobile:py-3 lg-mobile:px-11">
            
            <BodyLarge text="Iniciar" style={style} />
        </button>
    )
}