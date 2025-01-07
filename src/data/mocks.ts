import { Tarefa } from "./types";

/*export type Tarefa = {
    title: String,
    description: String,
    //project: Project,
    productivityGoal: number
    productivityDone: number,
}*/

export const mockTarefas : Tarefa[] = [
    {
        id: 0,
        title: "Tarefa 1",
        description: "Esta é a tarefa 1",
        productivityGoal: 1,
        productivityDone: 0,
    },
    {
        id: 1,
        title: "Tarefa 2",
        description: "Esta é a tarefa 1",
        productivityGoal: 2,
        productivityDone: 1,
    },
    {
        id: 2,
        title: "Tarefa 3",
        description: "Esta é a tarefa 1",
        productivityGoal: 3,
        productivityDone: 2,
    }
]