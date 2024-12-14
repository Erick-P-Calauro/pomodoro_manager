export interface ThemeContextType {
    theme: Theme,
    changeThemeState: (themeState: ThemeState) => void,
}

export interface Theme{
    key: ThemeState
    main: string,
    secondary: string
}

export enum ThemeState {
    PRODUTIVIDADE = "Produtividade",
    CURTO = "Descanso Curto",
    LONGO = "Descanso Longo"
}
