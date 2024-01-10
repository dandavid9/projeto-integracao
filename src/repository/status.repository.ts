import { Database } from "sqlite";
import { Status } from "../model/status.model";

export class StatusRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async findStatusById(tarefaId: number) {
        const status = await this.db.all('SELECT * FROM status Where ');

        return status.map((record) :Status => {
            return {
               //
            }
        })
    }

    async addStatus(status: Status) {

    }

    async deleteStatus(statusId: number) {

    }

    /*
    async updateStatus(statusId: number){
        
    }
    */
}