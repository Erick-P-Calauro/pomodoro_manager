import { useState} from "react";
import { Theme, ThemeState } from "../../data/types.ts";

export const useThemeState = () => {
    const [themeState, setThemeState] = useState<Theme>({key: ThemeState.PRODUTIVIDADE, main: "var(--produtividade)", secondary: "var(--produtividade2)"})

    function changeThemeState(state : ThemeState) {
        switch(state) {
            case ThemeState.PRODUTIVIDADE:
                setThemeState({key: ThemeState.PRODUTIVIDADE, main: "var(--produtividade)", secondary: "var(--produtividade2)"})
                break
            case ThemeState.CURTO:
                setThemeState({key: ThemeState.CURTO, main: "var(--descansoCurto)", secondary: "var(--descansoCurto2)"})
                break
            case ThemeState.LONGO:
                setThemeState({key: ThemeState.LONGO, main: "var(--descansoLongo)", secondary: "var(--descansoLongo2)"})
                break
        }
    }

    return [
        themeState, changeThemeState
    ]
}

