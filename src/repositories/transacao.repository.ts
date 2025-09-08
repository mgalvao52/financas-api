import { PrismaClient,Transacao } from "@prisma/client";

const prisma = new PrismaClient();

export class TransacaoRepository{
    async create(data:Omit<Transacao,"id"|"data">){
        return prisma.transacao.create({data});
    }

    async findByUserId(usuarioId:number){
        return prisma.transacao.findMany({where:{usuarioId}});
    }
    async amountByConta(usuarioId:number){
        const contas = await prisma.conta.findMany({
            where:{usuarioId},
            include:{
                transacoes:true
            }
        })

        return contas.map((c)=>{
            const saldo = c.transacoes.reduce((acc,t)=>{
                return acc + (t.tipo === "entrada"?t.valor: -t.valor);
            },c.saldo);

            return {
                conta:c.nome,
                saldo
            }
        })
    }
    async totalAmount(usuarioId:number){
        const transacoes = await prisma.transacao.findMany({where:{usuarioId}});
        const saldo = transacoes.reduce((acc,t)=>{
            return acc+(t.tipo === "entrada"?t.valor:-t.valor);
        },0)

        return {saldoTotal:saldo}
    }
    async expensesByCategory(usuarioId:number,mes:number,ano:number){
        const inicio = new Date(ano,mes-1,1);
        const fim = new Date(ano,mes,0,23,59,59);

        const transacoes = await prisma.transacao.groupBy({
            by:["categoriaId"],
            where:{
                usuarioId,
                tipo:"saida",
                data:{gte:inicio,lte:fim}
            },
            _sum:{valor:true}
        });

        const categorias = await prisma.categoria.findMany({
            where:{id:{in:transacoes.map((t)=>t.categoriaId)}}
        })

        return transacoes.map((t)=>{
            const categoria = categorias.find((c)=>c.id === t.categoriaId);
            return {
                categoria:categoria?.nome,
                totalGasto:t._sum.valor
            }
        })
    }

    async resumoMensal(usuarioId:number,mes:number,ano:number){
        const inicio = new Date(ano,mes-1,1);
        const fim = new Date(ano,mes,0,23,59,59)

        const entradas = await prisma.transacao.aggregate({
            _sum:{valor:true},
            where:{usuarioId,tipo:"entrada",data:{gte:inicio,lte:fim}}
        });

        const saidas = await prisma.transacao.aggregate({
            _sum:{valor:true},
            where:{usuarioId,tipo:"saida",data:{gte:inicio,lte:fim}}
        });

        return {
            entradas: entradas._sum.valor,
            saidas:saidas._sum.valor,
            saldo: (entradas._sum.valor??0) - (saidas._sum.valor ?? 0)
        }
    }
}