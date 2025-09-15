import express from "express";
import { setupSwagger } from "../swagger";
import { categoryRouter } from "./categoria.route";
import { authMiddleware } from "../middleware/auth";
import { contaRouter } from "./conta.route";
import { reportRouter } from "./report.route";
import { transacaoRouter } from "./transacao.route";
import { usuarioRouter } from "./usuario.route";
export const router = express.Router();

export function setupRoutes(app:express.Express){
    app.use(express.json());
    app.use("/api",router);
    setupSwagger(app);  
    router.use("/categoria",authMiddleware,categoryRouter);
    router.use("/conta",authMiddleware,contaRouter);
    router.use("/relatorio",authMiddleware,reportRouter);
    router.use("/transacao",authMiddleware,transacaoRouter);
    router.use("/usuario",usuarioRouter);
}