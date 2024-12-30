import React from "react";
import { format } from "date-fns";

export const TimerText = ({timerValue} : {timerValue: Date}) => {
    return (
        <span className="text-normal text-mobile-timer lg-mobile:text-desktop-timer font-bold font-workSans">
            {format(timerValue, "mm:ss")}
        </span>
    )
}