import { Database } from "sqlite";
import { Person } from "../model/person.model.js";

export class PersonRepository {

    private db: Database;

    constructor(db: Database) {
        this.db = db
    }

    async findPersons(
        firstNameLike: string,
        lastNameLike: string,
        emailLike: string
    ): Promise<Person[]> {
        const params: string[] = [];

        let q = "SELECT id_person, first_name, last_name, email " +
        "FROM person WHERE 1=1";

        if (firstNameLike) {
            q += ' AND first_name LIKE ? '
            params.push(firstNameLike)
        }

        if (lastNameLike) {
            q += ' AND last_name LIKE ? ';
            params.push(lastNameLike)
        }

        if (emailLike) {
            q += ' AND email LIKE ? '
            params.push(emailLike)
        }

        const records = await this.db.all(q, ...params)

        return records.map((record): Person => {
            return {
                idPerson: record.id_person,
                firstName: record.first_name,
                lastName: record.last_name,
                email: record.email
            }
        })
    }

    async addPerson(person: Person): Promise<number | undefined> {
        const result = await this.db.run(
            "INSERT INTO person " +
            "(first_name, last_name, email) " +
            "VALUES (?, ?, ?);",
            person.firstName,
            person.lastName,
            person.email,
        );

        return result.lastID;
    }

    async deletePerson(personId: number) {
        await this.db.run(
            "DELETE FROM person WHERE id_person = ?",
            personId
        )
    }
}