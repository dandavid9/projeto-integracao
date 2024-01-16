import { Handler, Request, Response } from "express";
import { StatusRepository } from "../repository/status.repository";
import { Status } from "../model/status.model";

export class StatusController{
    private statusRepository: StatusRepository;

    constructor(statusRepository:StatusRepository){
        this.statusRepository = statusRepository
    }

    addStatus(): Handler{
        return async (req: Request, res:Response)=>{
            const status : Status = req.body

            const statusId = await this.statusRepository.addStatus(status)

            res.status(201).json({ id: statusId })
        }
    }

}