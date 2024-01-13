import { Database } from "sqlite";
import { Status } from "../model/status.model";

export class StatusRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    async findStatusById(id_status: number | undefined) {
        const status = await this.db.all('SELECT * FROM status Where id_status = ? ', id_status);

        return status.map((record): Status => {
            return {
                idStatus: record.id_status,
                statusDesc: record.status_desc
            }
        })
    }

    async findStatusByStatusDescription(statusDesc: string | undefined) {
        const status = await this.db.all('SELECT * FROM status Where status_desc = ? ', statusDesc);

        return status.map((record): Status => {
            return {
                idStatus: record.id_status,
                statusDesc: record.status_desc
            }
        })
    }

    async addStatus(status: Status) {
        const result = await this.db.run("Insert into status(statusDesc) Values (?);",
        status.statusDesc)
        return result.lastID;
    }

    async deleteStatus(statusId: number) {
        await this.db.run("DELETE FROM status WHERE id_status = ?", statusId)
    }

    async updateStatus(statusId: number){
        await this.db.run("DELETE FROM status WHERE id_status = ?", statusId)
    }

}