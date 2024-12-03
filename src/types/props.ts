export interface TimerProps {
    timerState: string,
    changeTimerState: (string) => void,
    mainColor: string,
    secondaryColor: string, 
}

export interface FormTarefaProps {
    setDisplayState: (number) => void,
}