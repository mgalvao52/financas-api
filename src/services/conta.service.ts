import { ContaDTO } from "../dtos/conta.dto";
import { ContaRepository } from "../repositories/conta.repository";

export class ContaService{
    private repo = new ContaRepository();

    async create(conta:ContaDTO){
        return await this.repo.create(conta);
    }

    async getByUserId(usuarioId:number){
        return await this.repo.getByUserId(usuarioId);
    }
}