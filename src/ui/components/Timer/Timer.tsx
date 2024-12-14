import React, { useContext } from "react";
import { TimerStateButtonRow } from "./TimerStateButtonRow.tsx";
import { ThemeContext } from "../../hooks/themeContext.ts";
import { BodyLarge } from "../Typography/BodyLarge.tsx";

function Timer({}){
    const themeContext = useContext(ThemeContext)

    return (
        <div className="pt-4 pb-7 rounded-md space-y-4" style={{backgroundColor: themeContext.theme.main}}>
           <TimerStateButtonRow />

            <div className="w-full flex flex-col items-center space-y-4">
                <span className="text-normal sm-mobile:text-mobile-timer font-bold font-workSans">20:00</span>

                <button className="bg-normal rounded-sm flex items-center justify-center py-1.5 px-6">
                    <BodyLarge text="Iniciar" style={{color: themeContext.theme.main}} />
                </button>
            </div>
        </div>
    );
}

export default Timer;