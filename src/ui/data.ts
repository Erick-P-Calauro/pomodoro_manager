// Theme key
export const PRODUTIVIDADE = "PRODUTIVIDADE";
export const DESCANSO_CURTO = "DESCANSO_CURTO";
export const DESCANSO_LONGO = "DESCANSO_LONGO"

// Initial Timer Value 
export const INITIAL_PRODUTIVIDADE_TIMER = new Date(0,0,0,0,30);
export const INITIAL_DESCANSO_CURTO_TIMER = new Date(0,0,0,0,0,3);
export const INITIAL_DESCANSO_LONGO_TIMER = new Date(0,0,0,0,10);

// TimerState Status
export const STALLED = "STALLED";
export const RUNNING = "RUNNING";
export const DONE_PRODUCTIVITY = "DONE_PRODUCTIVITY";
export const DONE_SHORT = "DONE_SHORT";
export const DONE_LONG = "DONE_LONG";

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