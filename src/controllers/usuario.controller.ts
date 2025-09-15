import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";
import { usuarioSchema } from "../dtos/usuario.dto";
import { ValidationError } from "../validations/validation.error";
import { ZodError } from "zod";

const service = new UsuarioService();

export class UsuarioController {
    static async create(req: Request, res: Response) {
        try {
            const usuario = usuarioSchema.parse(req.body);
            const result = await service.create(usuario);
            res.status(201).json(usuario);
        } catch (error: any) {
            console.log(error);
            if(error instanceof ValidationError || error instanceof ZodError){
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }
    static async login(req: Request, res: Response) {
        try {
            const {email,senha} = req.body;
            const token = await service.login(email,senha);
            res.json(token);
        } catch (error: any) {
            console.log(error);
            if(error instanceof ValidationError){
                return res.status(400).json({ message: error.message });
            }
            res.status(500).json({ message: "Internal server error" });
        }
    }
}