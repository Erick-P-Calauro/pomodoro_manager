import React, { useContext } from "react";
import { TimerStateButtonRow } from "./TimerStateButtonRow.tsx";
import { ThemeContext } from "../../hooks/themeContext.ts";
import { BodyLarge } from "../Typography/BodyLarge.tsx";

function Timer({}){
    const themeContext = useContext(ThemeContext)

    return (
        <div className="px-4 pt-4 pb-7 rounded-md space-y-4 w-full flex flex-col items-center shadow-tinyBoxShadow
            lg-mobile:px-20 lg-mobile:pt-6 lg-mobile:pb-9 desktop:space-y-6" 
            style={{backgroundColor: themeContext.theme.main}}>
           
            <TimerStateButtonRow />

            <span className="text-normal text-mobile-timer lg-mobile:text-desktop-timer font-bold font-workSans">20:00</span>

            <button className="bg-normal rounded-sm flex items-center justify-center shadow-lgBoxShadow py-1.5 px-6 lg-mobile:py-3 lg-mobile:px-11">
                <BodyLarge text="Iniciar" style={{color: themeContext.theme.main}} />
            </button>
        </div>
    );
}

export default Timer;