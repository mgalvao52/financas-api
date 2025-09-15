import { CategoriaDTO } from "../dtos/categoria.dto";
import { CategoriaRepository } from "../repositories/categoria.repository";
import { ValidationError } from "../validations/validation.error";

export class CategoriaService{
    private repo = new CategoriaRepository();

    async create(categoria:CategoriaDTO){
        try {
            const categoriaExistente = await this.repo.getByName(categoria.nome);
            if(categoriaExistente) throw new ValidationError("Categoria já existe");
            return await this.repo.create(categoria);
        } catch (error) {
            throw error;
        }
    }
    async list(){
        return await this.repo.list();
    }
    async getByName(nome:string){
        return await this.repo.getByName(nome);
    }
}