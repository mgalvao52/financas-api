import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient();

export class UsuarioRepository {
    async create(data: Omit<Usuario, "id">) {
        return prisma.usuario.create({ data, select: { id: true, email: true, nome: true } });
    }
    async findByEmail(email: string) {
        return prisma.usuario.findUnique({ where: { email } });
    }

    async findById(id: number) {
        return prisma.usuario.findUnique({ select: { id: true, email: true, nome: true }, where: { id } });
    }
    async updateSenha(id: number, senha: string) {
        return prisma.usuario.update({
            data: {
                senha
            }, where: {
                id
            },
            select: {
                id: true,
                email: true,
                nome: true
            }
        })
    }
    async confirmEmail(id:number){
        return prisma.usuario.update({
            data: {
                email_confirmado:true
            }, where: {
                id
            },
            select: {
                id: true,
                email: true,
                nome: true
            }
        })
    }
}