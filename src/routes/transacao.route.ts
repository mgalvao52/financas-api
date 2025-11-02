import { Router } from "express";
import { TransacaoController } from "../controllers/transacao.controller";
const route = Router();

/**
 * @openapi
 * components:
 *  schemas:
 *   transacaoDTO:
 *    properties:
 *     descricao:
 *      type: string
 *     valor:
 *      type: number
 *     tipo:
 *      type: enum
 *      enum: [entrada, saida]
 *     contaId:
 *      type: integer
 *     categoriaId:
 *      type: integer
 *       
 */

/**
 * @openapi
 * /api/transacao:
 *  post:
 *   summary: cadastro de transações
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#components/schemas/transacaoDTO' 
 *   responses:
 *    201:
 *     description: transacao cadastrada
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#components/schemas/transacaoDTO'
 *    400:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string  
 */   
route.post("/",TransacaoController.create);

/**
 * @openapi
 * /api/transacao:
 *  get:
 *   summary: lista de transacao por usuario
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
route.get("/",TransacaoController.list);

export {route as transacaoRouter};