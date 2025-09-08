import { PrismaClient } from "@prisma/client";
import express from "express";
import { usuarioSchema } from "./dtos/usuario.dto";
import { transacaoSchema } from "./dtos/transacao.dtos";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware/auth";
import { UsuarioController } from "./controllers/usuario.controller";
import { TransacaoController } from "./controllers/transacao.controller";
import { CategoriaController } from "./controllers/categoria.controller";
import { ContaController } from "./controllers/conta.controller";
import { ReportController } from "./controllers/report.controller";
import { setupSwagger } from "./swagger";


const app = express();
const prisma = new PrismaClient();

app.use(express.json());
setupSwagger(app);

// rota de teste
app.get("/",(req,res)=>{
    res.send("API de finanças funcionando");
});

// criar usuario
app.post("/usuarios", UsuarioController.create );
//login
app.post("/auth/login",UsuarioController.login);

// categoria
app.post("/categoria",authMiddleware,CategoriaController.create);
app.get("/categoria",authMiddleware,CategoriaController.list);
app.get("/categoria/:nome",authMiddleware,CategoriaController.getByName);

//conta
app.post("/conta",authMiddleware,ContaController.create);
app.get("/conta",authMiddleware,ContaController.getByUserId);

// criar transação
app.post("/transacoes",authMiddleware,TransacaoController.create);
// listar transações
app.get("/transacoes",authMiddleware,TransacaoController.List);

// relatorios
app.get("/relatorios/saldo-contas",authMiddleware,ReportController.amountByConta);
app.get("/relatorios/gastos-categoria",authMiddleware,ReportController.expensesByCategory);
app.get("/relatorios/saldo-total",authMiddleware,ReportController.totalAmount);
app.get("/relatorios/resumo-mensal",authMiddleware,ReportController.resumoMensal);

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("Servidor rodando em http://localhost:3000");
})
