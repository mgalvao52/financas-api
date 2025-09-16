import { Router } from "express";
import { BancoController } from "../controllers/banco.controller";

const route = Router();

/**
 * @openapi
 * components:
 *  schemas:
 *   bancoDTO:
 *    properties:
 *     name:
 *      type: string
 * 
 */

/**
 * @openapi
 * /api/banco:
 *  post:
 *   summary: Cadastro de banco
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#components/schemas/bancoDTO'
 *   responses:
 *    201:
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#components/schemas/bancoDTO'
 *    400:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string
 */
 route.post("/",BancoController.create);

/**
 * @openapi
 * /api/banco:
 *  get:
 *   summary: Lista de bancos cadastrados
 *   responses:
 *    200:
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#components/schemas/bancoDTO'
 */

route.get("/",BancoController.list);
export {route as bancoRouter};
