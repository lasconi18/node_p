import { Request, Response, NextFunction, RequestHandler } from "express";
import dotnev from "dotenv"

dotnev.config()

export const authenticate: RequestHandler = (req, res, next): any=> {
    const token = req.header("Authorization")?.replace("Bearer ", "")
    
    if(!token){
        
            return res.status(401).json({message: "Acesso negado"})
    }
    
    if(token !== process.env.JWT){
            return res.status(403).json({message: "Token inválido"})
    }
    
    next()
}
