
import { TransacaoDTO } from "../dtos/transacao.dtos";
import { TransacaoRepository } from "../repositories/transacao.repository";


export class TransacaoService{
    private repo = new TransacaoRepository();
    async create(data:TransacaoDTO){
        return await this.repo.create(data);
    }

    async getListByUser(usuarioId:number){
        return await this.repo.findByUserId(usuarioId);
    }
}

