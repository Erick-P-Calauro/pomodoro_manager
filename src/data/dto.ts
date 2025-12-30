// Model
export type Tarefa = {
    id: string,
    title: string,
    description: string,
    active: boolean,
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

// Types

export type GenericApiError = {
    ok: boolean,
    data?: undefined,
    error: string
}

// Dtos

export type UserResponse = {
    id: string,
    username: string
}

export type TarefaCreate = {
    id: string,
    title: string,
    description: string,
    productivityGoal: number,
    productivityDone: number,
}