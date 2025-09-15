import express from "express";
import { setupSwagger } from "./swagger";
import { setupRoutes } from "./routes";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
setupSwagger(app);

// rota de teste
app.get("/", (req, res) => {
  res.send("API de finanças funcionando");
});

// rotas
setupRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
