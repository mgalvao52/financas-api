import { Request, Response } from "express";
import { ReportService } from "../services/report.service";

const service = new ReportService();

export class ReportController{
    static async amountByConta(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const result = await service.amountByConta(usuarioId);
            return res.json(result);
        } catch (error:any) {
            console.log(error);
           return res.status(500).json({message:"Internal server error"});
        }
    }
     static async expensesByCategory(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const {mes,ano} = req.params;
            const result = await service.expensesByCategory(usuarioId,Number(mes),Number(ano));
           return res.json(result);
        } catch (error:any) {
            console.log(error);
           return res.status(500).json({message:"Internal server error"});
        }
    }
     static async totalAmount(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const result = await service.totalAmount(usuarioId);
           return res.json(result);
        } catch (error:any) {
            console.log(error);
           return res.status(500).json({message:"Internal server error"});
        }
    }
     static async resumoMensal(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const {mes,ano} = req.params;
            const result = await service.resumoTotal(usuarioId,Number(mes),Number(ano));
           return res.json(result);
        } catch (error:any) {
            console.log(error);
           return res.status(500).json({message:"Internal server error"});
        }
    }
}