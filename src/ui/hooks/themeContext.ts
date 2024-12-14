import { createContext } from "react";
import { useThemeState } from "./useTheme.ts";
import { ThemeContextType } from "../../data/types.ts";

export const ThemeContext = createContext<ThemeContextType>({theme: useThemeState[0], changeThemeState: useThemeState[1]})