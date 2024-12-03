import React from "react";
import { TimerProps } from "../types/props";

function Timer({timerState, changeTimerState, mainColor, secondaryColor} : TimerProps){

    return (
        <div className="py-6 rounded-md" style={{backgroundColor: mainColor}}>
            <div className="sm-mobile:mx-2.5 lg-mobile:mx-5 sm-mobile:flex sm-mobile:items-center sm-mobile:justify-between 
                md-mobile:grid md-mobile:grid-cols-6 md-mobile:gap-x-5">
                
                <button id="changeProdutividade" onClick={() => changeTimerState("produtividade")} 
                    className="rounded-sm px-2 py-3 sm-mobile:flex md-mobile:block md-mobile:col-start-1 md-mobile:col-end-3"
                    style={{backgroundColor: timerState == "produtividade" ? secondaryColor : mainColor}}>

                    <span className="text-textoNormal sm-mobile:text-sm md-mobile:text-lg font-medium font-workSans">Produtividade</span>
                </button>
                
                <button id="changeCurto" onClick={() => changeTimerState("curto")} 
                    className="rounded-sm px-2 py-3 sm-mobile:flex md-mobile:block md-mobile:col-start-3 md-mobile:col-end-5"
                    style={{backgroundColor: timerState == "curto" ? secondaryColor : mainColor}}>

                    <span className="text-textoNormal sm-mobile:text-sm md-mobile:text-lg font-workSans">Descanso<br /> Curto</span>
                </button>
               
                <button id="changeLongo" onClick={() => changeTimerState("longo")} 
                    className="rounded-sm px-2 py-3 sm-mobile:flex md-mobile:block md-mobile:col-start-5 md-mobile:col-end-7"
                    style={{backgroundColor: timerState == "longo" ? secondaryColor : mainColor}}>

                    <span className="text-textoNormal sm-mobile:text-sm md-mobile:text-lg font-workSans">Descanso <br /> Longo</span>
                </button>
            </div>

            <div className="w-full flex flex-col items-center space-y-2">
                <span className="sm-mobile:text-sm-timer md-mobile:text-md-timer lg-mobile:text-lg-timer desktop:text-desktop-timer 
                    text-textoNormal font-extrabold font-workSans">20:00</span>

                <button className="bg-textoNormal rounded-sm flex items-center justify-center sm-mobile:py-1.5 sm-mobile:px-11 md-mobile:py-3 md-mobile:px-22">
                    <span className="font-medium sm-mobile:text-lg md-mobile:text-3xl font-workSans" style={{color: mainColor}}>Iniciar</span>
                </button>
            </div>
        </div>
    );
}

export default Timer;