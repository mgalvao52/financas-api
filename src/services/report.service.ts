import { TransacaoRepository } from "../repositories/transacao.repository";

export class ReportService{
    private repo = new TransacaoRepository();
    async amountByConta(usuarioId:number){
        return this.repo.amountByConta(usuarioId);
    }
    async expensesByCategory(usuarioId:number,mes:number,ano:number){
        return this.repo.expensesByCategory(usuarioId,mes,ano);
    }
    async totalAmount(usuarioId:number){
        return this.repo.totalAmount(usuarioId);
    }
    async resumoTotal(usuarioId:number,mes:number,ano:number){
        return this.repo.resumoMensal(usuarioId,mes,ano);
    }
}