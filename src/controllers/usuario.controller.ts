import { Request, Response } from "express";
import { UsuarioService } from "../services/usuario.service";
import { usuarioSchema } from "../dtos/usuario.dto";

const service = new UsuarioService();

export class UsuarioController {
    static async create(req: Request, res: Response) {
        try {
            const usuario = usuarioSchema.parse(req.body);
            const result = await service.create(usuario);
            res.json(usuario);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
    static async login(req: Request, res: Response) {
        try {
            const {email,senha} = req.body;
            const token = await service.login(email,senha);
            res.json(token);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}