import { createContext } from "react";
import { ThemeContextType, ThemeState } from "../../data/types.ts";

const themeValue: ThemeContextType = {theme: {key: ThemeState.PRODUTIVIDADE, main: "", secondary: ""}, changeThemeState: () => {}}
export const ThemeContext = createContext<ThemeContextType>(themeValue)