import React from "react";
import { Tarefa } from "../../../data/types.ts";
import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx";

export const CardTarefa = ({ title, productivityDone, productivityGoal}: Tarefa) => {

    return (
        <div className="bg-normal py-2.5 flex items-center justify-between rounded-md lg-mobile:py-3">
            <div className="flex items-center">
                <button className="mx-2">
                    <img className="w-[22px] h-[21px]" src="/check_circle.svg" alt="check icon"></img>
                </button>

                <HeadlineSmall text={title} style={{color: "var(--config)"}}/>
            </div>

            <HeadlineSmall text={productivityDone.toString() + "/" + productivityGoal.toString()} style={{color: "var(--config)", marginRight: "1.5rem"}} />
        </div>
    );
}
