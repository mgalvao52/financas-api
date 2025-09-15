import { transacaoSchema } from "../dtos/transacao.dtos";
import { TransacaoService } from "../services/transacao.service";
import { Request,Response } from "express";
import { ValidationError } from "../validations/validation.error";

const service = new TransacaoService();

export class TransacaoController{
    static async create(req:Request,res:Response){
        try {
            const transacao = transacaoSchema.parse(req.body);
            const usuarioId = (req as any).userId;
            transacao.usuarioId = usuarioId;
            const result = await service.create(transacao);
            return res.status(201).json(result);
        } catch (error:any) {
            console.log(error);
            if(error.name === "ZodError" || error instanceof ValidationError){
               return res.status(400).json({message:error.message});
            }
            res.status(500).json({message:"Internal server error"});
        }
    }

    static async list(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const transacoes = await service.getListByUser(usuarioId);
            res.json(transacoes);
        } catch (error:any) {
            console.log(error);
            res.status(500).json({message:"Internal server error"});
        }
    }
}