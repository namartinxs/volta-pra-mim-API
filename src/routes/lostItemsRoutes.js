import express from "express"
import LostItemController from "../controllers/LostItemsController.js"
// import { authMiddleware } from "../middlewares/authMiddleware.js"

const routes = express.Router()

/**
 * @swagger
 * tags:
 *   name: Itens Perdidos
 *   description: Gerenciamento de itens perdidos
 */

/**
 * @swagger
 * /lost-items:
 *   get:
 *     summary: Lista todos os itens perdidos
 *     tags:
 *       - Itens Perdidos
 *     responses:
 *       200:
 *         description: Lista de itens retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LostItem'
 */
routes.get('/lost-items', LostItemController.listLostItem)

/**
 * @swagger
 * /lost-items/{id}:
 *   get:
 *     summary: Busca um item perdido pelo ID
 *     tags:
 *       - Itens Perdidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do item
 *     responses:
 *       200:
 *         description: Item encontrado
 *       404:
 *         description: Item não encontrado
 */
routes.get('/lost-items/:id', LostItemController.listLostItembyId)

/**
 * @swagger
 * /lost-items-non-return-items:
 *   get:
 *     summary: Lista itens que ainda não foram devolvidos
 *     tags:
 *       - Itens Perdidos
 *     responses:
 *       200:
 *         description: Lista de itens não devolvidos
 */
routes.get('/lost-items-non-return-items', LostItemController.listNonReturnItems)

/**
 * @swagger
 * /lost-items:
 *   post:
 *     summary: Cadastra um novo item perdido
 *     tags:
 *       - Itens Perdidos
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [itemName, fileName, dateFound]
 *             properties:
 *               itemName:
 *                 type: string
 *                 example: Mochila
 *               fileName:
 *                 type: string
 *                 example: mochila.jpg
 *               statusItem:
 *                 type: string
 *                 enum: [aguardando_reclamacao, reclamado, devolvido]
 *               description:
 *                 type: string
 *                 example: Mochila azul encontrada na biblioteca
 *               locationFound:
 *                 type: string
 *                 example: 64abc123def456
 *               dateFound:
 *                 type: string
 *                 format: date-time
 *               foundBy:
 *                 type: string
 *               receivedBy:
 *                 type: string
 *               collectedBy:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
routes.post('/lost-items', LostItemController.registerlostItem)

/**
 * @swagger
 * /lost-items/{id}:
 *   put:
 *     summary: Atualiza um item perdido
 *     tags:
 *       - Itens Perdidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LostItem'
 *     responses:
 *       200:
 *         description: Item atualizado com sucesso
 *       404:
 *         description: Item não encontrado
 */
routes.put('/lost-items/:id', LostItemController.updateLostItem)

/**
 * @swagger
 * /lost-items-colleted/{id}:
 *   put:
 *     summary: Atualiza o usuário que coletou o item
 *     tags:
 *       - Itens Perdidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item marcado como coletado
 *       404:
 *         description: Item não encontrado
 */
routes.put('/lost-items-colleted/:id',  LostItemController.updatecollectedBy)

/**
 * @swagger
 * /lost-items/{id}:
 *   delete:
 *     summary: Remove um item perdido
 *     tags:
 *       - Itens Perdidos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Item removido com sucesso
 *       404:
 *         description: Item não encontrado
 */
routes.delete('/lost-items/:id',  LostItemController.deleteLostItem)

export default routes
