import { PrismaClient,Conta } from "@prisma/client";

const prisma = new PrismaClient();

export class ContaRepository{
    async create(data:Omit<Conta,"id">){
        return prisma.conta.create({data});
    }    
    async getByUserId(usuarioId:number){
        return prisma.conta.findMany({where:{usuarioId},
        select:{
            id:true,
            bancoId:true,
            saldo:true,
            banco:{
                select:{
                    nome:true
                }
            },
            usuario:{
                select:{
                    nome:true
                }
            }
        }});
    }
    async getExists(usuarioId:number,bancoId:number){
        return prisma.conta.findMany({where:{bancoId,usuarioId}});
    }
}