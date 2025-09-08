import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";
import { categoriaSchema } from "../dtos/categoria.dto";

const service = new CategoriaService();
export class CategoriaController{
    static async create(req:Request,res:Response){
        try {
            const categoria = categoriaSchema.parse(req.body);
            const result = await service.create(categoria);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
    static async list(req:Request,res:Response){
        try {
            const list = await service.list();
            res.json(list);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
    static async getByName(req:Request,res:Response){
        try {
            const nome = req.params.nome as string;
            const result = await service.getByName(nome);
            return res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
}