import { Handler, Request, Response } from "express";
import { TarefaRepository } from "../repository/tarefa.repository";
import { DetailedTarefa } from "../model/dto/DetailedTarefa.model";
import { StatusRepository } from "../repository/status.repository";
import { Tarefa } from "../../public/js/definition";

export class TarefaController {
    private tarefaRepository: TarefaRepository;
    private statusRepository: StatusRepository;

    constructor(tarefaRepository: TarefaRepository, statusRepository: StatusRepository) {
        this.tarefaRepository = tarefaRepository,
            this.statusRepository = statusRepository
    }

    findTarefa(): Handler {
        return async (req: Request, res: Response) => {
            const { personId } = req.params

            const tarefas = await this.tarefaRepository.findTarefaByPersonId(parseInt(personId))

            const result = await Promise.all(tarefas.map(async tarefa => {
                const status = await this.statusRepository.findStatusById(tarefa.statusId);

                return {
                    id: tarefa.idTarefa,
                    titulo: tarefa.titulo,
                    descricao: tarefa.descricao,
                    data: tarefa.data,
                    status: {
                        idStatus: status[0].idStatus,
                        statusDesc: status[0].statusDesc
                    }
                };
            }));

            res.status(200).json(result)
        }

    }

    addTarefa(): Handler {
        return async (req: Request, res: Response) => {
            const { personId } = req.params
            const tarefa: DetailedTarefa = req.body

            const tarefaId = await this.tarefaRepository.addTarefa(tarefa, parseInt(personId))

            res.status(201).json({ id: tarefaId })
        }
    }

    deleteTarefa(): Handler {
        return async (req: Request, res: Response) => {
            const tarefaId = parseInt(req.params.tarefaId)

            await this.tarefaRepository.deleteTarefa(tarefaId)

            res.status(200).json()
        }
    }

    updateTarefa(): Handler {
        return async (req: Request, res: Response) => {
            const { statusId, tarefaId } = req.params;

            const statusIdNumber = parseInt(statusId);
            const tarefaIdNumber = parseInt(tarefaId);



            await this.tarefaRepository.updateTarefa(statusIdNumber, tarefaIdNumber);

            res.status(200).json({ message: 'Tarefa atualizada com sucesso.' });

        }
    }
}