import { ThemeState } from "./types";

export interface TimerStateButtonProps {
    text: ThemeState,
    changeThemeState: (themeState: ThemeState) => void,
}

export interface TypographyProps {
    style: React.CSSProperties | undefined ,
    text: String
}