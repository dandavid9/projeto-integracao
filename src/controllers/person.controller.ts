/* import { Handler, Request, Response } from "express";
import { PersonRepository } from "../repository/person.repository.js";
import { Person } from "../model/person.model.js";
export class PersonController {

    private personRepository: PersonRepository = null;

    constructor(
        personRepository: PersonRepository,
    ) {
        this.personRepository = personRepository
    }

    findPersons(): Handler {
        const completePersonWithDetails = async (
            person: Person
        ): Promise<DetailedPerson> => {
            const result: DetailedPerson = {
                ...person,
                contacts: []
            }

            const contacts = await this.contactRepository.findContacts(
                person.id
            )

            contacts.forEach(contact => {
                result.contacts.push({
                    type: contact.type,
                    value: contact.value,
                })
            })

            return result
        }

        return async (req :Request, res: Response) => {
            const { firstName, lastName, company, address } = req.query

            const persons = await this.personRepository.findPersons(
                <string>firstName,
                <string>lastName,
                <string>company,
                <string>address,
            );

            const result: DetailedPerson[] = []
            for (const person of persons) {
                const detailedPerson = await completePersonWithDetails(person)
                result.push(detailedPerson)
            }

            res.status(200).json(result)
        }
    }

    addPerson(): Handler {
        return async (req: Request, res: Response) => {
            const person: DetailedPerson = req.body

            const personId = await this.personRepository.addPerson(person)

            person.contacts.forEach(async contact => {
                await this.contactRepository.addContact({
                    // type: contact.type,
                    // value: contact.value,
                    ...contact,
                    personId: personId
                })
            });

            res.status(201).json({ id: personId })
        }
    }

    deletePerson(): Handler {
        return async (req: Request, res: Response) => {
            const personId = parseInt(req.params.personId)

            await this.contactRepository.deleteContacts(personId)
            await this.personRepository.deletePerson(personId)

            res.status(200).json()
        }
    }
} */