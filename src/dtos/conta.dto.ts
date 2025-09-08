import {z} from "zod"

export const contaSchema = z.object({
    nome: z.string().min(3,'nome deve ter no minimo 3 caracteres'),
    saldo: z.number().positive(),
    usuarioId: z.number().int()
})

export type ContaDTO = z.infer<typeof contaSchema>;