import { ContaDTO } from "../dtos/conta.dto";
import { ContaRepository } from "../repositories/conta.repository";
import { UsuarioRepository } from "../repositories/usuario.repository";
import { ValidationError } from "../validations/validation.error";

export class ContaService{
    private repo = new ContaRepository();
    private repoUsuario = new UsuarioRepository();
    private repoConta = new ContaRepository();
    async create(conta:ContaDTO){
        try {
            const usuario = await this.repoUsuario.findById(conta.usuarioId);
            if(!usuario) throw new ValidationError("Usuário não encontrado");
            const contaExistente = await this.repoConta.getExists(conta.usuarioId,conta.bancoId);
            if(contaExistente.length > 0) throw new ValidationError("Usuário já possui uma conta");
            const result = await this.repo.create(conta);            
            
        } catch (error) {
            throw error;
        }
    }

    async getByUserId(usuarioId:number){
        return await this.repo.getByUserId(usuarioId);
    }
}