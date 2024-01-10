import { Database } from "sqlite";
import { Status } from "../model/status.model";

export class StatusRepository {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }


    async findStatus() {

    }

    async findStatusById(statusId: number) {

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