import express from "express";
export const router = express.Router();
import { CategoriaController } from "../controllers/categoria.controller";

/**
 * @openapi
 * components:
 *  schemas:
 *    categoriaDTO:
 *     type: object 
 *     properties:
 *       id:
 *         type: integer
 *       nome:
 *         type: string
 *       
 */

/**
 * @openapi
 * /api/categoria:
 *  post:
 *    summary: cadastro de categoria
 *    requestBody:
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#components/schemas/categoriaDTO'
 *    responses:
 *     201:
 *      description: 
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#components/schemas/categoriaDTO'
 *     400:
 *      description: 
 *      content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *              type: string
 *     
 */

router.post("/",CategoriaController.create);

/**
 * @openapi
 * /api/categoria:
 *  get:
 *   summary: lista todas as categorias
 *   responses:
 *    200:
 *     description: lista de categorias
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#components/schemas/categoriaDTO'
 *    500:
 *     description: Erro interno do servidor
 *     content:
 *       application/json:
 *         schema:
 *          type: object
 *          properties:
 *            message:
 *              type: string
 * 
 */
router.get("/",CategoriaController.list);


 /**
  * @openapi
  * /api/categoria/{name}:
  *  get:
  *   summary: busca categoria pelo nome
  *   parameters:
  *    - in: path
  *      name: name
  *      required: true
  *      schema:
  *       type: string
  *       description: nome da categoria
  *   responses:
  *    200:
  *     description: categoria encontrada
  *     content:
  *      application/json:
  *       schema:
  *        $ref: '#components/schemas/categoriaDTO'
  *    404:
  *     description: categoria não encontrada
  *     content:
  *      application/json:
  *       schema:
  *         type: object 
  *         properties:
  *          message:
  *           type: string
  *    500:
  *     description: Erro interno do servidor
  *     content:
  *      application/json:
  *       schema:
  *        type: object
  *        properties:
  *         message:
  *          type: string
  * 
  * 
  */  
router.get("/:name",CategoriaController.getByName);

export { router as categoryRouter };