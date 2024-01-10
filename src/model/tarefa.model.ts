export interface Tarefa {
    tarefaId? : number
    titulo: string
    descricao: string
    data: Date
    statusId?: number
    personId?: number
}
