import { bancoDTO } from "../dtos/banco.dto";
import { BancoRepository } from "../repositories/banco.repository";
import { ValidationError } from "../validations/validation.error";

export class BancoService{
    private repo = new BancoRepository();
    async create(banco:bancoDTO){
        try {
            const bancoExistente = await this.repo.getByNome(banco.nome);
            if(bancoExistente != null){
                throw new ValidationError("banco ja existe");
            }
            return this.repo.create(banco);
            
        } catch (error) {
            throw error;
        }
    }
    async list(){
        return this.repo.list();
    }
}