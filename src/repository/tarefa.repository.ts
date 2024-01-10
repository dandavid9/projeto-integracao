import { Database } from "sqlite";
import { Tarefa } from "../model/Tarefa.model";

export class TarefaRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }
        /*
            tarefaId? : number
            titulo: string
            descricao: string
            data: Date
            statusId?: number
            personId?: number
  id_tarefa INTEGER PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255),
    data_tarefa DATE NOT NULL,
    status_id INTEGER,
    person_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES pessoas(id),
    FOREIGN KEY (status_id) REFERENCES 'status'(id_status)
        */

    async findTarefaById(personId: number) {
        const tarefas = await this.db.all('SELECT * FROM TAREFA Where person_id = ?', personId);

        return tarefas.map((record) :Tarefa => {
            return {
                tarefaId : record.id_tarefa,
                titulo : record.titulo,
                descricao : record.descricao,
                data: record.data_tarefa,
                statusId: record.status_id,
                personId: record.person_id
            }
        })
    }

    async addTarefa(tarefa: Tarefa) {
        const newTarefa = await this.db.run("Insert into tarefa (titulo, descricao, data, statusId, personId)" +
        "Values (?,?,?,?,?);",
        tarefa.titulo,
        tarefa.descricao,
        tarefa.data,
        tarefa.statusId,
        tarefa.personId);

        return newTarefa.lastID;
    }

    async deleteTarefas6(tarefaId: number) {
        await this.db.run(
            "DELETE FROM tarefa WHERE id_tarefa = ?",
            tarefaId
        )
    }

    /*
    async updateTarefa(tarefaId: number){
        
    }
    */
}