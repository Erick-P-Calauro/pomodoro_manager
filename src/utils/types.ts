export interface ThemeContextType {
    colors: Theme,
    changeThemeState: (themeState: ThemeState) => void,
}

export interface Theme{
    key: string,
    main: string,
    secondary: string
}

export enum ThemeState {
    PRODUTIVIDADE = "Produtividade",
    CURTO = "Descanso Curto",
    LONGO = "Descanso Longo"
}
