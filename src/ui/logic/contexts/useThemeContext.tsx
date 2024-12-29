import React from "react";

const ThemeState = {
    key: "PRODUTIVIDADE",
    colors: {
        main: "",
        secondary: "",
    },
    changeThemeState: (a) => {}
}

export const ThemeContext = React.createContext(ThemeState)

export const ThemeProvider = ({children, value}) => {
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}