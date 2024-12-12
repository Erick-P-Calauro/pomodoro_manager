import { ThemeState } from "./types";

export interface TimerStateButtonProps {
    text: ThemeState,
    changeThemeState: (themeState: ThemeState) => void,
}

export interface FormTarefaProps {
    setDisplayState: (number) => void,
}