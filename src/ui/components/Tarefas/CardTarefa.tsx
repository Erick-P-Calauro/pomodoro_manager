import React, { useContext, useEffect, useState } from "react";
import { HeadlineSmall } from "../Typography/HeadlineSmall.tsx";
import { TarefaContext } from "../../logic/contexts/useTarefaContext.tsx";

export const CardTarefa = ({ tarefa}) => {

    const [completeStatus, setCompleteStatus] = useState(false);

    const { title, productivityDone, productivityGoal } = tarefa;
    const { setTarget } = useContext(TarefaContext); 
    
    useEffect(() => {

        if(productivityDone === productivityGoal) {
            setCompleteStatus(true);
        }

    }, [productivityDone, productivityGoal])

    return (
        <div className="bg-normal py-2.5 flex items-center justify-between rounded-md lg-mobile:py-3">
            <div className="flex items-center">
                <button className="mx-2" onClick={() => setCompleteStatus(s => !s)}>
                    <img className="w-[22px] h-[21px]" src="/assets/check_circle.svg" alt="check icon" />
                </button>

                {
                    completeStatus ?
                    <s><HeadlineSmall text={title} style={{color: "var(--config)"}}/></s>
                    :
                    <HeadlineSmall text={title} style={{color: "var(--config)"}}/>
                }
            </div>

            <div className="relative flex items-center">
                <HeadlineSmall text={productivityDone.toString() + "/" + productivityGoal.toString()} style={{color: "var(--config)", marginRight: "1.5rem"}} />
                
                <button onClick={() => setTarget(tarefa)} className="text-center">
                    <svg className="fill-config" width="24" height="24" viewBox="0 0 24 24">
                        <g clipPath="url(#clip0_6_13410)">
                            <path d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_6_13410">
                                <rect width="24" height="24"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

            </div>
        </div>
    );
}
