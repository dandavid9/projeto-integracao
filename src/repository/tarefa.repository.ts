import { Database } from "sqlite";
import { Tarefa } from "../model/Tarefa.model";

export class TarefaRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async findTarefaByPersonId(personId: number | undefined) {
        const tarefas = await this.db.all('SELECT * FROM TAREFA Where person_id = ?', personId);

        return tarefas.map((record) :Tarefa => {
            return {
                tarefasId : record.id_tarefa,
                titulo : record.titulo,
                descricao : record.descricao,
                data: record.data_tarefa,
                statusId: record.statusId
            }
        })
    }

    async addTarefa(tarefa: Tarefa, personId) {
        const newTarefa = await this.db.run("Insert into tarefa (titulo, descricao, data, statusId, personId)" +
        "Values (?,?,?,?,?);",
        tarefa.titulo,
        tarefa.descricao,
        tarefa.data,
        1,
        personId);

        return newTarefa.lastID;
    }

    async deleteTarefas(personId: number) {
        await this.db.run(
            "DELETE FROM tarefa WHERE person_id = ?",
            personId
        )
    }

    /*
    async updateTarefa(tarefaId: number){
        
    }
    */
}