import { Request, Response } from "express";
import { ValidationError } from "../validations/validation.error";
import { ZodError } from "zod";
import { BancoService } from "../services/banco.service";
import { bancoSchema } from "../dtos/banco.dto";
const bancoService = new BancoService();
export class BancoController{
    static async create(req:Request,res:Response){
        try {
            const banco = bancoSchema.parse(req.body);
            const result = await bancoService.create(banco);
            return res.status(201).json(result);

        } catch (error:any) {
            console.log(error.message);
            if(error instanceof ValidationError || error instanceof ZodError){
                return res.status(400).json({message:error.message});
            }
            return res.status(500).json({message:"Internal Server Error"});
        }
    }
    static async list(req:Request,res:Response){
        try {
            return await bancoService.list();
        } catch (error:any) {
            return res.status(500).json({message:"Internal Server Error"});
        }
    }
}