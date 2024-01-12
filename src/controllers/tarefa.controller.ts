import { Handler, Request, Response } from "express";
import { StatusRepository } from "../repository/status.repository";
import { TarefaRepository } from "../repository/tarefa.repository";
import { Tarefa } from "../model/Tarefa.model";

export class TarefaController{
    private tarefaRepository: TarefaRepository;
    private statusRepository: StatusRepository;

    constructor(tarefaRepository: TarefaRepository, statusRepository:StatusRepository){
        this.tarefaRepository = tarefaRepository
        this.statusRepository = statusRepository
    }

    addTarefa(): Handler{
        /* Ainda por implementar o add tarefa e analisar o mesmo */
        return async (req: Request, res:Response)=>{
            const personId = req.params
            const tarefa : Tarefa = req.body

            const tarefaId = await this.tarefaRepository.addTarefa(tarefa, personId)

            res.status(201).json({ id: tarefaId })
        }
    }

    deleteTarefa(): Handler {
        return async (req: Request, res: Response) => {
            const personId = parseInt(req.params.personId)

            await this.tarefaRepository.deleteTarefas(personId)

            res.status(200).json()
        }
    }
}