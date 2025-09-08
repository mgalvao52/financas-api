import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import { UsuarioRepository } from "../repositories/usuario.repository";
import { UsuarioDTO } from "../dtos/usuario.dto";

const JWT_SECRET = process.env.JWT_SECRET as string;

export class UsuarioService{
    private repo = new UsuarioRepository();

    async create(usuario:UsuarioDTO){
        const hash = await bcrypt.hash(usuario.senha,10);
        usuario.senha = hash;
        return this.repo.create(usuario);
    }
    async login(email:string,senha:string){
        const usuario = await this.repo.findByEmail(email);
        if(!usuario){
            throw new Error("credenciais invalidas");
        }
        const valido = await bcrypt.compare(senha,usuario.senha);
        if(!valido){
            throw new Error("credenciais invalidas");
        }
        const token = jwt.sign({userId:usuario.id},JWT_SECRET,{expiresIn:"2h"});
        return {token};
    }
}
