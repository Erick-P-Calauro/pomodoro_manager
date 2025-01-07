import { Tarefa } from "../../../data/types"

export const cadastrarTarefa = (dispatch : React.Dispatch<any>, tarefa : Tarefa) => {
    dispatch({type: "CADASTRAR_TAREFA", payload: tarefa})
}

export const editarTarefa = (dispatch: React.Dispatch<any>, tarefa : Tarefa) => {
    dispatch({type: "EDITAR_TAREFA", payload: tarefa})
}

export const apagarTarefa = (dispatch : React.Dispatch<any>, id : number) => {
    dispatch({type: "APAGAR_TAREFA", payload: id})
}