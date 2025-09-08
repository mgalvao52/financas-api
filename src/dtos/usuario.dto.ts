import {email, z} from "zod";

export const usuarioSchema = z.object({
    nome: z.string().min(3,'nome deve ter pelo menos 3 caracteres'),
    email: z.email('email invalido'),
    senha: z.string().min(5,'senha deve ter pelo menos 5 caracteres')
});

export type UsuarioDTO = z.infer<typeof usuarioSchema>;