import z from "zod";

export const bancoSchema = z.object({
    nome: z.string().min(3,"nome deve te no minimo 3 caracteres")
});

export type bancoDTO = z.infer<typeof bancoSchema>;