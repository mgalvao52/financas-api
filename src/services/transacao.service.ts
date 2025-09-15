
import { th } from "zod/v4/locales/index.cjs";
import { TransacaoDTO } from "../dtos/transacao.dtos";
import { CategoriaRepository } from "../repositories/categoria.repository";
import { ContaRepository } from "../repositories/conta.repository";
import { TransacaoRepository } from "../repositories/transacao.repository";
import { UsuarioRepository } from "../repositories/usuario.repository";
import { ValidationError } from "../validations/validation.error";


export class TransacaoService{
    private repo = new TransacaoRepository();
    private repoConta = new ContaRepository();
    private repoCategoria = new CategoriaRepository();
    private repoUsuario = new UsuarioRepository();
    async create(data:TransacaoDTO){
        try {

            const usuario = await this.repoUsuario.findById(data.usuarioId);
            if(usuario == null) throw new ValidationError("Usuário não encontrado");
            const conta  = await this.repoConta.getByUserId(data.usuarioId);
            if(conta.length <= 0) throw new ValidationError("Conta não encontrada");
            const categoria = await this.repoCategoria.getById(data.categoriaId);
            if(!categoria) throw new ValidationError("Categoria não encontrada");
            return await this.repo.create(data);
            
        } catch (error) {
            throw error;
        }
    }

    async getListByUser(usuarioId:number){
        return await this.repo.findByUserId(usuarioId);
    }
}

