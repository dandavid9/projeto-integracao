export interface Tarefa {
    tarefasId? : number
    titulo: string
    descricao: string
    data: Date
    statusId?: number
    personId?: number
}
