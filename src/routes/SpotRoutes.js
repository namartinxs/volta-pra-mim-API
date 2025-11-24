import express from "express"
import SpotController from "../controllers/SpotController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const routes = express.Router()

/**
 * @swagger
 * tags:
 *   name: Spots
 *   description: Gerenciamento de locais (spots)
 */

/**
 * @swagger
 * /spot:
 *   get:
 *     summary: Lista todos os spots
 *     tags:
 *       - Spots
 *     responses:
 *       200:
 *         description: Lista de spots retornada com sucesso
 */
routes.get('/spot',  SpotController.listSpot)

/**
 * @swagger
 * /spot/{id}:
 *   get:
 *     summary: Busca um spot pelo ID
 *     tags:
 *       - Spots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do spot
 *     responses:
 *       200:
 *         description: Spot encontrado
 *       404:
 *         description: Spot não encontrado
 */
routes.get('/spot/:id',  SpotController.listSpotbyId)

/**
 * @swagger
 * /spot:
 *   post:
 *     summary: Cadastra um novo spot
 *     tags:
 *       - Spots
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [local]
 *             properties:
 *               description:
 *                 type: string
 *                 example: Sala de reunião no 2º andar
 *               local:
 *                 type: string
 *                 example: Prédio B - Sala 205
 *     responses:
 *       201:
 *         description: Spot criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
routes.post('/spot', SpotController.registerSpot)

/**
 * @swagger
 * /spot/{id}:
 *   put:
 *     summary: Atualiza um spot pelo ID
 *     tags:
 *       - Spots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do spot
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               description:
 *                 type: string
 *                 example: Sala reformada
 *               local:
 *                 type: string
 *                 example: Prédio A - Sala 101
 *     responses:
 *       200:
 *         description: Spot atualizado com sucesso
 *       404:
 *         description: Spot não encontrado
 */
routes.put('/spot/:id',  SpotController.updateSpot)

/**
 * @swagger
 * /spot/{id}:
 *   delete:
 *     summary: Deleta um spot pelo ID
 *     tags:
 *       - Spots
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do spot
 *     responses:
 *       200:
 *         description: Spot deletado com sucesso
 *       404:
 *         description: Spot não encontrado
 */
routes.delete('/spot/:id',  SpotController.deleteSpot)

export default routes