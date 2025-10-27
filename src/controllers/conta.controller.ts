import { Request, Response } from "express";
import { ContaService } from "../services/conta.service";
import { contaSchema } from "../dtos/conta.dto";
import { ValidationError } from "../validations/validation.error";

const service = new ContaService();
export class ContaController{
    static async create(req:Request,res:Response){
        try {
            const conta = contaSchema.parse(req.body);
            const usuarioid = (req as any).userId;            
            const result = await service.create(usuarioid,conta);
            res.status(201).json(result);
        } catch (error:any) {
            console.log(error);
            if(error.name === "ZodError"|| error instanceof ValidationError){
             return res.status(400).json({message:error.message});
            }
            return res.status(500).json({message:"Internal server error"});
        }
    }
    static async getByUserId(req:Request,res:Response){
        try {
            const usuarioid = (req as any).userId;
            const result = await service.getByUserId(usuarioid);
            res.json(result?.forEach(item=>{
                return {id:item.id,saldo:item.saldo,banco:item.banco.nome,bancoId:item.bancoId}
            }));
        } catch (error:any) {
            console.log(error);
            res.status(500).json({message:"Internal server error"});
        }
    }
}