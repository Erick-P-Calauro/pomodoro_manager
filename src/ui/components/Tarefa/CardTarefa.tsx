import React from "react";
import { BodyExtraSmall } from "../Typography/BodyExtraSmall.tsx";

function Tarefa() {
    return (
        <div className="bg-normal py-2.5 flex items-center justify-between rounded-md">
            <div className="flex items-center">
                <button className="mx-2">
                    <img className="w-[16px] h-[15px]" src="/check_circle.svg"></img>
                </button>

                <BodyExtraSmall text="Ler(Água Funda)" style={{color: "var(--config)"}}/>
            </div>

            <BodyExtraSmall text="2/2" style={{color: "var(--config)", marginRight: "1.5rem"}} />
        </div>
    );
}

export default Tarefa;