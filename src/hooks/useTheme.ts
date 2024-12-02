import { useState } from "react";

export const useTheme = () => {
    const [timerState, setTimerState] = useState("produtividade");
    const [mainColor, setMainColor] = useState("var(--produtividade)");
    const [secondaryColor, setSecondaryColor] = useState("var(--produtividade2)");

    function changeTimerState(state) {
        setTimerState(state);
        
        switch(state) {
            case "produtividade":
                setMainColor("var(--produtividade)");
                setSecondaryColor("var(--produtividade2)");
                break;
            case "curto":
                setMainColor("var(--descansoCurto)");
                setSecondaryColor("var(--descansoCurto2)");
                break;
            case "longo":
                setMainColor("var(--descansoLongo)");
                setSecondaryColor("var(--descansoLongo2)");
                break;
        }
    }

    return [
        timerState, changeTimerState, mainColor, secondaryColor,
    ]
}