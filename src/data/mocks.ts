import { Tarefa } from "./dto.ts";

export const initialSettings = {
    timer: {
        productivity: 30,
        short: 5,
        long: 10
    },

    theme: {
        productivity: "#EB6B6B",
        short: "#7BCAAD",
        long: "#98AFE1"
    },
}

export const mockTarefas : Tarefa[] = [
    {
        id: "0",
        title: "Tarefa 1",
        description: "Esta é a tarefa 1",
        productivityGoal: 1,
        productivityDone: 0,
        active: true,
    },
    {
        id: "1",
        title: "Tarefa 2",
        description: "Esta é a tarefa 2",
        productivityGoal: 2,
        productivityDone: 1,
        active: false,
    },
    {
        id: "2",
        title: "Tarefa 3",
        description: "Esta é a tarefa 3",
        productivityGoal: 3,
        productivityDone: 2,
        active: true,
    }
]