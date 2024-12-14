import { Tarefa, ThemeState } from "./types";

export interface TimerStateButtonProps {
    text: ThemeState,
    changeThemeState: (themeState: ThemeState) => void,
}

export interface TypographyProps {
    style: React.CSSProperties | undefined ,
    text: String
}

/*export interface FormTarefaProps {
    setDisplayState: (number) => void,
    tarefas : Tarefa[],
    setTarefaState: React.Dispatch<React.SetStateAction<Tarefa[]>>
}*/

export interface handleTarefaFormProps {
    event: React.SyntheticEvent;
    formState: number,
    tarefas: Tarefa[],
    setTarefas: React.Dispatch<React.SetStateAction<Tarefa[]>>,
    setDisplayState: React.Dispatch<React.SetStateAction<number>>
}