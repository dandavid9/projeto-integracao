import { Handler, Request, Response } from "express";
import { PersonRepository } from "../repository/person.repository.js";
import { Person } from "../model/person.model.js";
import { DetailedPerson } from "../model/dto/DetailedPerson.model.js";
import { TarefaRepository } from "../repository/tarefa.repository.js";
import { StatusRepository } from "../repository/status.repository.js";

export class PersonController {

    private personRepository: PersonRepository;
    private tarefaRepository: TarefaRepository;
    private statusRepository: StatusRepository;

    constructor(personRepository: PersonRepository, tarefaRepository: TarefaRepository, statusRepository: StatusRepository) {
        this.personRepository = personRepository
        this.tarefaRepository = tarefaRepository
        this.statusRepository = statusRepository
    }

    findPersons(): Handler {
        const completePersonWithDetails = async (person: Person): Promise<DetailedPerson> => {
            const result: DetailedPerson = {
                ...person,
                tarefas: []
            }

            const tarefas = await this.tarefaRepository.findTarefaByPersonId(person.id_person)
           
            for(const tarefa of tarefas ) {
                const status = await this.statusRepository.findStatusById(tarefa.statusId)
                result.tarefas.push({
                   titulo: tarefa.titulo,
                   descricao: tarefa.descricao,
                   data: tarefa.data,
                   status: {
                    idStatus: status[0].idStatus,
                    statusDesc: status[0].statusDesc
                },
                statusId: tarefa.statusId  
                   /* Ananalizar como obter os status */
                })
            }
            return result
        }

        return async (req :Request, res: Response) => {
            const { firstName, lastName, email } = req.query

            const persons = await this.personRepository.findPersons(
                <string>firstName,
                <string>lastName,
                <string>email,
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
            const person: Person = req.body

            const personId = await this.personRepository.addPerson(person)

            res.status(201).json({ id: personId })
        }
    }

 
    deletePerson(): Handler {
        return async (req: Request, res: Response) => {
            const personId = parseInt(req.params.personId)

            await this.tarefaRepository.deleteTarefasByPerson(personId)
            await this.personRepository.deletePerson(personId)

            res.status(200).json()
        }
    }
} 