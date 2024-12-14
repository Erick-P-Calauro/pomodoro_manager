import { createContext } from "react";
import { ThemeContextType } from "../utils/types.ts";
import { useThemeState } from "./useTheme.ts";

export const ThemeContext = createContext<ThemeContextType>({theme: useThemeState[0], changeThemeState: useThemeState[1]})