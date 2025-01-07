// Theme key
export const PRODUTIVIDADE = "PRODUTIVIDADE";
export const DESCANSO_CURTO = "DESCANSO_CURTO";
export const DESCANSO_LONGO = "DESCANSO_LONGO"

// Theme Context 
export const MAIN_THEMES = [
    {
        key: "PRODUTIVIDADE",
        colors: {
            main: "var(--produtividade)",
            secondary: "var(--produtividade2)"
        }
    },
    {
        key: "DESCANSO_CURTO",
        colors: {
            main: "var(--descansoCurto)",
            secondary: "var(--descansoCurto2)"
        }
    },
    {
        key: "DESCANSO_LONGO",
        colors: {
            main: "var(--descansoLongo)",
            secondary: "var(--descansoLongo2)"
        }
    }

]

export type TypographyProps = {
    style: React.CSSProperties | undefined ,
    text: String
}
