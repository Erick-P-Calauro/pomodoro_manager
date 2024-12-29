import React from "react";
import { TimerStateButton } from "./TimerStateButton.tsx";
import { DESCANSO_CURTO, DESCANSO_LONGO, PRODUTIVIDADE } from "../../data.ts";

export const TimerStateButtonRow = () => {

    return (
        <div className="w-full flex items-center justify-between">
            <TimerStateButton text={PRODUTIVIDADE}   />
            <TimerStateButton text={DESCANSO_CURTO} />
            <TimerStateButton text={DESCANSO_LONGO} />
        </div>
    );
}
