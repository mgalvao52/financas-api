import {z} from "zod"

export const contaSchema = z.object({
    saldo: z.number().positive(),
    usuarioId: z.number().int(),
    bancoId:z.number()
})

export type ContaDTO = z.infer<typeof contaSchema>;