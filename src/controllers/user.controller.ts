import { NextFunction, Request, Response } from "express";
import { userService } from "../services/user.service";

export const userController = {
    getAll : async (req: Request, res: Response, next: NextFunction) => {
        try{
            let data = await userService.findAll()
            res.json(data)
        }catch(error){
            next(error)
        }
    },
    getById : async (req: Request, res: Response, next: NextFunction) => {
        try{
            const user = await userService.findById(Number(req.params.id))
            user ? res.json(user) : res.status(404).json({message : "Usuário  não encontrado"})
        }catch(error){
            next(error)
        }
    },
    create: async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try{
            const {name, email} = req.body
            const user = await userService.create(name, email)
            res.status(201).json(user)
        }catch(error){
            next(error)
        }
    },
    update: async (req: Request, res: Response, next: NextFunction) => {
        try{
            const {name, email} = req.body
            const user = await userService.update(Number(req.params.id), name, email)
            user ? res.json(user) : res.status(404).json({message : "Usuário  não encontrado"})
        }catch(error){
            next(error)
        }
    },
    delete: async (req: Request, res: Response, next: NextFunction) => {
        try{
            const success = await userService.delete(Number(req.params.id))
            success ? res.json({message : "Usuário deletado com sucesso"}) : res.status(404).json({message : "Usuário  não encontrado"})
        }catch(error){
            next(error)
        }
    }
}