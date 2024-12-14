import React from "react";
import { HeadlineMedium } from "../Typography/HeadlineMedium.tsx";

export function HeaderTarefa() {
    return (
        <div className="flex items-center justify-between">
            <HeadlineMedium text="Tarefas" style={{color: "var(--normal)"}}/>
            
            <button className="text-normal w-[25px] h-[23px]">
                <img src="/more_vert.svg"></img>
            </button>
        </div>
    );

}