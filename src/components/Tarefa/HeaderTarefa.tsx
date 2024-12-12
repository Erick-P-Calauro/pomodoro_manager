import React from "react";

export function HeaderTarefa() {
    return (
        <div className="flex items-center justify-between">
            <h2 className="font-workSans font-semibold text-normal text-xl">Tarefas</h2>
            <button className="text-normal">
                <img src="/more_vert.svg"></img>
            </button>
        </div>
    );

}