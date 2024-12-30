import React from "react";

export const TimerText = ({timerValue = "20:00"}) => {
    return (
        <span className="text-normal text-mobile-timer lg-mobile:text-desktop-timer font-bold font-workSans">
            {timerValue}
        </span>
    )
}