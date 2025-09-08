import { transacaoSchema } from "../dtos/transacao.dtos";
import { TransacaoService } from "../services/transacao.service";
import { Request,Response } from "express";

const service = new TransacaoService();

export class TransacaoController{
    static async create(req:Request,res:Response){
        try {
            const transacao = transacaoSchema.parse(req.body);
            const usuarioId = (req as any).userId;
            transacao.usuarioId = usuarioId;
            const result = await service.create(transacao);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }

    static async List(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const transacoes = await service.getListByUser(usuarioId);
            res.json(transacoes);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
}