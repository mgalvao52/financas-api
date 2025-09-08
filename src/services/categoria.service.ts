import { CategoriaDTO } from "../dtos/categoria.dto";
import { CategoriaRepository } from "../repositories/categoria.repository";

export class CategoriaService{
    private repo = new CategoriaRepository();

    async create(categoria:CategoriaDTO){
        return await this.repo.create(categoria);
    }
    async list(){
        return await this.repo.list();
    }
    async getByName(nome:string){
        return await this.repo.getByName(nome);
    }
}