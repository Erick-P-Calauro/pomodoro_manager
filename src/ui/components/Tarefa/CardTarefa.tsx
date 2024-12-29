import React from "react";
import { BodyExtraSmall } from "../Typography/BodyExtraSmall.tsx";
import { Tarefa } from "../../../data/types.ts";

export const CardTarefa = ({...props}: Tarefa) => {
    return (
        <div className="bg-normal py-2.5 flex items-center justify-between rounded-md lg-mobile:py-3">
            <div className="flex items-center">
                <button className="mx-2">
                    <img className="w-[16px] h-[15px]" src="/check_circle.svg" alt="check icon"></img>
                </button>

                <BodyExtraSmall text={props.title} style={{color: "var(--config)"}}/>
            </div>

            <BodyExtraSmall text={props.productivityDone + "/" + props.productivityGoal.toString()} style={{color: "var(--config)", marginRight: "1.5rem"}} />
        </div>
    );
}
