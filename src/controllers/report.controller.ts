import { Request, Response } from "express";
import { ReportService } from "../services/report.service";

const service = new ReportService();

export class ReportController{
    static async amountByConta(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const result = await service.amountByConta(usuarioId);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
     static async expensesByCategory(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const {mes,ano} = req.query;
            const result = await service.expensesByCategory(usuarioId,Number(mes),Number(ano));
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
     static async totalAmount(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const result = await service.totalAmount(usuarioId);
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
     static async resumoMensal(req:Request,res:Response){
        try {
            const usuarioId = (req as any).userId;
            const {mes,ano} = req.query;
            const result = await service.resumoTotal(usuarioId,Number(mes),Number(ano));
            res.json(result);
        } catch (error:any) {
            res.status(400).json({message:error.message});
        }
    }
}