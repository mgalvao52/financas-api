import { PrismaClient,Categoria } from "@prisma/client";

const prisma = new PrismaClient();

export class CategoriaRepository{
    async create(categoria:Omit<Categoria,"id">){
        return prisma.categoria.create({data:categoria});
    }
    async list(){
        return prisma.categoria.findMany();
    }
    async getByName(nome:string){
        return prisma.categoria.findFirst({where:{nome}})
    }
    async getById(id:number){
        return prisma.categoria.findUnique({where:{id}})
    }
}