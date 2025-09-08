import {number, z} from "zod";

export const transacaoSchema = z.object({
    descricao: z.string().min(3,'descrição deve ter pelo menos 3 caracteres'),
    valor: z.number().positive('valor deve ser positivo'),
    tipo: z.enum(['entrada','saida']),
    usuarioId: z.number().int(),
    contaId:number().int(),
    categoriaId:number().int()
});

export type TransacaoDTO = z.infer<typeof transacaoSchema>;