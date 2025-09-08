import { Request, Response } from "express";
import { CategoriaService } from "../services/categoria.service";
import { categoriaSchema } from "../dtos/categoria.dto";

/**
 * @openapi
 * components:
 *  schemas:
 *    categoriaDTO:
 *     type: object 
 *     properties:
 *       id:
 *         type: integer
 *       nome:
 *         type: string
 *       
 */

/**
 * @openapi
 * /cateroria:
 *  post:
 *    summary: cadastro de categoria
 *    requestBody:
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#components/schemas/categoriaDTO'
 *    responses:
 *     201:
 *      description: ok
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/categoriaDTO'  
 */

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