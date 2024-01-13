export interface Tarefa {
    idTarefa? : number
    titulo: string
    descricao: string
    data: Date
    statusId?: number
    personId?: number
}
