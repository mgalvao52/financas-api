import { Router } from "express";
import { ContaController } from "../controllers/conta.controller";
const route = Router();

/**
 * @openapi
 * components:
 *  schemas:
 *   contaDTO:
 *    type: object
 *    properties:
 *      id: 
 *       type: integer
 *      saldo:
 *       type: number
 *      bancoId:
 *       type: integer
 *      banco:
 *       type: string   
 */

/**
 * @openapi
 * /api/conta:
 *  post:
 *   summary: cadastro de conta
 *   requestBody:
 *    type: object
 *    content:
 *     application/json:
 *       schema:
 *        $ref: '#components/schemas/contaDTO'
 *   responses:
 *    201:
 *     description: conta cadastrada
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#components/schemas/contaDTO'
 *    400:
 *     description: 
 *     content:
 *       application/json:
 *        schema:
 *         type: object
 *         properties:
 *          message:
 *           type: string 
 *    
 *     
 */
route.post("/",ContaController.create);

/**
 * @openapi
 * /api/conta:
 *  get:
 *   summary: pesquisa de contas por usuario   
 *   responses:
 *     200:
 *      description: lista de contas do usuario  
 *      content:
 *        application/json:
 *         schema:
 *          type: array
 *          items:
 *            $ref: '#components/schemas/contaDTO'
 */
route.get("/",ContaController.getByUserId);


export {route as contaRouter};