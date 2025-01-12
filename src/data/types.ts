export type Tarefa = {
    id: number,
    title: string,
    description: string,
    //project: Project,
    productivityGoal: number
    productivityDone: number,
}

export type Settings = {
    timer : {
        productivity: number,
        short: number,
        long: number
    }
    
    theme: {
        productivity: string,
        short: string,
        long: string
    },
}