import React from "react";

export type ThemeContextType =  {
    key: string,
    colors: {
        main : string,
        secondary: string,
    }
    changeThemeState: (newTheme: string) => void
}

const ThemeContextState: ThemeContextType = {
    key: "PRODUTIVIDADE",
    colors: {
        main: "",
        secondary: "",
    },
    changeThemeState: (a) => {}
}

export const ThemeContext = React.createContext(ThemeContextState)

export const ThemeProvider = ({children, value}) => {
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}