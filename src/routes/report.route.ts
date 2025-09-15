import { Router } from "express";
import { ReportController } from "../controllers/report.controller";

const route = Router();

/**
 * @openapi
 * /api/relatorio/total-por-conta:
 *  get:
 *   summary: relatorio de transacao por conta do usuario
 *   responses:
 *    200:
 *     description:
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#components/schemas/transacaoDTO'   
 */
route.get("/total-por-conta",ReportController.amountByConta);
/**
 * @openapi
 * /api/relatorio/gasto-por-categoria/{mes}/{ano}:
 *  get:
 *   summary: relatorio de transacao por categoria
 *   parameters:
 *     - in: path
 *       name: mes
 *       type: integer
 *       required: true
 *     - in: path
 *       name: ano
 *       type: integer
 *       required : true
 *   responses:
 *    200:
 *     description:
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#components/schemas/transacaoDTO'   
 */
route.get("/gasto-por-categoria/:mes/:ano",ReportController.expensesByCategory);
/**
 * @openapi
 * /api/relatorio/resumo-mensal/{mes}/{ano}:
 *  get:
 *   summary: resumo de transacao mensal por usuario
 *   parameters:
 *     - in: path
 *       name: mes
 *       type: integer
 *       required: true
 *     - in: path
 *       name: ano
 *       type: integer
 *       required : true
 *   responses:
 *    200:
 *     description:
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#components/schemas/transacaoDTO'   
 */
route.get("/resumo-mensal/:mes/:ano",ReportController.resumoMensal);
/**
 * @openapi
 * /api/relatorio/total:
 *  get:
 *   summary: relatorio total de transaçoes por usuario
 *   responses:
 *    200:
 *     description:
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#components/schemas/transacaoDTO'   
 */
route.get("/total",ReportController.totalAmount);

export {route as reportRouter}