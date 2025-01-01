import { useState} from "react";
import { DESCANSO_CURTO, MAIN_THEMES, PRODUTIVIDADE } from "../../types/types.ts";

type ThemeStateType = {
    key: string,
    colors: {
        main: string,
        secondary: string,
    },
}

export const useThemeState = (): [ThemeStateType, (string) => void] => {
    const [themeState, setThemeState] = useState<ThemeStateType>(MAIN_THEMES[0]);

    function changeThemeState(newThemeState: string) {
        setThemeState(
            newThemeState === PRODUTIVIDADE ? 
            MAIN_THEMES[0] : newThemeState === DESCANSO_CURTO ? 
            MAIN_THEMES[1] : MAIN_THEMES[2] 
        );
    }

    return [themeState, changeThemeState]
}

