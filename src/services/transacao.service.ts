
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
    async create(data:TransacaoDTO,usuarioId:number){
        try {

            const usuario = await this.repoUsuario.findById(usuarioId);
            if(usuario == null) throw new ValidationError("Usuário não encontrado");
            const conta  = await this.repoConta.getByUserId(usuarioId);
            if(conta.length <= 0) throw new ValidationError("Conta não encontrada");
            const categoria = await this.repoCategoria.getById(data.categoriaId);
            if(!categoria) throw new ValidationError("Categoria não encontrada");
            if(!data.data){
                data.data = new Date();
            }
            return await this.repo.create({categoriaId:data.categoriaId,contaId:data.contaId,data:data.data,
                descricao:data.descricao,
                tipo:data.tipo,
                valor:data.valor,
                usuarioId:usuarioId
            });
            
        } catch (error) {
            throw error;
        }
    }

    async getListByUser(usuarioId:number){
        return await this.repo.findByUserId(usuarioId);
    }
}

