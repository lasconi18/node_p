import { Request, Response, NextFunction } from "express";

export function errorMiddlware(err: Error, req: Request, res: Response, next: NextFunction){
    res.status(500).json({message: err.message || "Erro interno no servidor"})
}