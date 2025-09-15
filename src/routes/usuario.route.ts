import { Router } from "express";
import { UsuarioController } from "../controllers/usuario.controller";

const route = Router();
/**
 * @openapi
 * components:
 *  schemas:
 *   usuarioDTO:
 *    type: object
 *    properties:
 *      nome:
 *       type: string
 *      email:
 *       type: string
 *      senha: 
 *       type: string
 */

/**
 * @openapi
 * /api/usuario:
 *  post:
 *   summary: cadastro de usuario
 *   requestBody:
 *    content:
 *     application/json:
 *       schema:
 *        $ref: '#components/schemas/usuarioDTO' 
 *   responses:
 *    201:
 *     description: usuario cadastrado
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         nome:
 *          type: string
 *         email: 
 *          type: string
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
 */
route.post("/",UsuarioController.create);

/**
 * @openapi
 * /api/usuario/login:
 *  post:
 *   summary: login de acesso
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        email:
 *         type: string
 *        senha:
 *         type: string
 *   responses:
 *    200:
 *     description:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         email:
 *          type: string
 *         token:
 *          type: string
 *    400:
 *     description:
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        properties:
 *         message:
 *          type: string           
 */
route.post("/login",UsuarioController.login);

export {route as usuarioRouter}


