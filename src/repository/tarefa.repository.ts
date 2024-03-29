import { Database } from "sqlite";
import { Tarefa } from "../model/Tarefa.model";

export class TarefaRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async findTarefaByPersonId(personId: number | undefined) {
        const records = await this.db.all('SELECT * FROM TAREFA Where person_id = ?', personId);

        return records.map((record): Tarefa => {
            return {
                idTarefa: record.id_tarefa,
                titulo: record.titulo,
                descricao: record.descricao,
                data: record.data_tarefa,
                statusId: record.status_id

            }
        })
    }

    async addTarefa(tarefa: Tarefa, personId): Promise<number | undefined> {
        const result = await this.db.run("Insert into tarefa (titulo, descricao, data_tarefa, status_id, person_id)" +
            " values (?, ?, ?, ?, ?)",
            tarefa.titulo,
            tarefa.descricao,
            tarefa.data,
            tarefa.statusId,
            personId);
        return result.lastID;
    }

    async deleteTarefasByPerson(personId: number) {
        await this.db.run(
            "DELETE FROM tarefa WHERE person_id = ?",
            personId
        )
    }

    async deleteTarefa(tarefaId: number) {
        await this.db.run(
            "DELETE FROM tarefa WHERE id_tarefa = ?",
            tarefaId
        )
    }

    async updateTarefa(statusId: number, tarefaId: number) {
        await this.db.run(
            "UPDATE tarefa SET status_id = ? WHERE id_tarefa = ?",
            statusId,
            tarefaId
        )
    }
}