import express from "express";
import { setupSwagger } from "../swagger";
import { categoryRouter } from "./categoria.route";
import { authMiddleware } from "../middleware/auth";
// import { authRouter } from "./auth.routes.js";
// import { userRouter } from "./user.routes.js";
// import { transactionRouter } from "./transaction.routes.js";
export const router = express.Router();

export function setupRoutes(app:express.Express){
    app.use(express.json());
    app.use("/api",router);
    setupSwagger(app);  
    // router.use("/auth",authRouter);
    // router.use("/users",userRouter);
    router.use("/categoria",authMiddleware,categoryRouter);
    // router.use("/transactions",transactionRouter);
}