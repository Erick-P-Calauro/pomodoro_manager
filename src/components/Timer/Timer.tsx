import React, { useContext } from "react";
import { TimerStateButtonRow } from "./TimerStateButtonRow.tsx";
import { ThemeContext } from "../../hooks/ThemeContext.ts";

function Timer({}){
    const theme = useContext(ThemeContext)

    return (
        <div className="py-6 rounded-md" style={{backgroundColor: theme.colors.main}}>
           <TimerStateButtonRow />

            <div className="w-full flex flex-col items-center space-y-2">
                <span className="
                    sm-mobile:text-sm-timer 
                    md-mobile:text-md-timer 
                    lg-mobile:text-lg-timer 
                    desktop:text-desktop-timer 
                    text-normal font-extrabold font-workSans">20:00</span>

                <button className="
                    bg-normal rounded-sm flex items-center justify-center 
                    sm-mobile:py-1.5 sm-mobile:px-11 
                    md-mobile:py-3 md-mobile:px-22">

                    <span className="font-medium sm-mobile:text-lg md-mobile:text-3xl font-workSans" style={{color: theme.colors.main}}>Iniciar</span>
                </button>
            </div>
        </div>
    );
}

export default Timer;