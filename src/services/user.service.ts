import { User } from "../models/user.model";
import { db } from "../config/database";

let users: User[] = []
let idCounter = 1;

export const userService = {
    findAll : async (): Promise<User[]>=> {
        return db('users').select("*")
    },
    findById : async (id: number) : Promise<User | undefined> =>{
        return db('users').where({id}).first()
    },
    create: async (name: string, email: string): Promise<User> => {
        try{
            const [id] = await db("users").insert({name, email})
            return await db('users').where({id}).first()
        }catch(error: any){
            if(error.code == "ER_DUMO_ENTRY"){
                throw new Error("Usuário já existente")
            }
            throw new Error("Erro ao criar usuário")
        }
    },
    update: async (id: number, name: string, email: string) : Promise<User | null> =>{
        const updated = await db('users').where({id}).update({name, email})
        return updated ? await db('users').where({id}).first() : null
    },
    delete: async (id: number) : Promise<boolean> =>{
        const deleted = await db('users').where({id}).delete()
        return deleted > 0
    }
}