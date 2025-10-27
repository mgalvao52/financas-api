import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";
import { categoriaSchema } from "../dtos/categoria.dto";
import { ValidationError } from "../validations/validation.error";

const service = new CategoriaService();
export class CategoriaController{
    static async create(req:Request,res:Response){
        try {
            const categoria = categoriaSchema.parse(req.body);
            const result = await service.create(categoria);
            return res.status(201).json(result);
        } catch (error:any) {
            console.log(error);
            if(error.name === "ZodError"|| error instanceof ValidationError){
             return res.status(400).json({message:error.message});
            }
            return res.status(500).json({message:"Internal server error"}); 
        }
    }
    static async list(req:Request,res:Response){
        try {
            const list = await service.list();
           return res.json(list);
        } catch (error:any) {
            console.log(error);
           return res.status(500).json({message:"Internal server error"});
        }
    }
    static async getByName(req:Request,res:Response){
        try {
            const nome = req.params.nome as string;
            const result = await service.getByName(nome);
            return res.json(result);
        } catch (error:any) {
            console.log(error);
            return res.status(500).json({message:"Internal server error"});
        }
    }
}