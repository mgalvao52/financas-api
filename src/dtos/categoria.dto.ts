import {z} from "zod"

export const categoriaSchema = z.object({
    nome:z.string().min(3,'nome deve ter no minimo 3 caracteres')
})

export type CategoriaDTO = z.infer<typeof categoriaSchema>;