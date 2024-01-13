import { Handler, Request, Response } from "express";
import { TarefaRepository } from "../repository/tarefa.repository";
import { Tarefa } from "../model/Tarefa.model";
import { DetailedTarefa } from "../model/dto/DetailedTarefa.model";

export class TarefaController{
    private tarefaRepository: TarefaRepository;

    constructor(tarefaRepository: TarefaRepository){
        this.tarefaRepository = tarefaRepository
    }

    addTarefa(): Handler{
        return async (req: Request, res:Response)=>{
            const { personId } = req.params
            const tarefa : DetailedTarefa  = req.body

            const tarefaId = await this.tarefaRepository.addTarefa(tarefa, parseInt(personId))

            res.status(201).json({ id: tarefaId })
        }
    }

    deleteTarefa(): Handler {
        return async (req: Request, res: Response) => {
            const tarefaId = parseInt(req.params.tarefaId)

            await this.tarefaRepository.deleteTarefas(tarefaId)

            res.status(200).json()
        }
    }
}