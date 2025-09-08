import { Request, Response } from "express";
import { ContaService } from "../services/conta.service";
import { contaSchema } from "../dtos/conta.dto";

const service = new ContaService();
export class ContaController{
    static async create(req:Request,res:Response){
        try {
            const conta = contaSchema.parse(req.body);
            const result = await service.create(conta);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
    static async getByUserId(req:Request,res:Response){
        try {
            const usuarioid = (req as any).userId;
            const result = await service.getByUserId(usuarioid);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
}