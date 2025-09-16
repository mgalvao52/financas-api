import { Banco, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class BancoRepository{
    async create(banco:Omit<Banco,"id">){
        return prisma.banco.create({data:banco});
    }
    async list(){
        return prisma.banco.findMany();
    }
    async getByNome(nome:string){
        return prisma.banco.findFirst({where:{
            nome:{
                contains:nome,
                mode: "insensitive"
            }
        }})
    }
}