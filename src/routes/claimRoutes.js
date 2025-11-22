import express from "express"
import ClaimController from "../controllers/ClaimController.js"
import { authMiddleware } from "../middlewares/authMiddleware.js"

const routes = express.Router()

/**
 * @swagger
 * tags:
 *   name: Reivindicações
 *   description: Gerenciamento de itens perdidos (claims)
 */

/**
 * @swagger
 * /claim:
 *   get:
 *     summary: Lista todas as reivindicações
 *     tags:
 *       - Reivindicações
 *     responses:
 *       200:
 *         description: Lista de reivindicações retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Claim'
 */
routes.get('/claim',authMiddleware,  ClaimController.listClaim)

/**
 * @swagger
 * /claim/{id}:
 *   get:
 *     summary: Busca uma reivindicação pelo ID
 *     tags:
 *       - Reivindicações
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da reivindicação
 *     responses:
 *       200:
 *         description: Reivindicação encontrada
 *       404:
 *         description: Reivindicação não encontrada
 */
routes.get('/claim/:id',authMiddleware,  ClaimController.listClaimbyId)

/**
 * @swagger
 * /claim-non-approve:
 *   get:
 *     summary: Lista reivindicações não aprovadas
 *     tags:
 *       - Reivindicações
 *     responses:
 *       200:
 *         description: Lista de reivindicações não aprovadas
 */
routes.get('/claim-non-approve',authMiddleware,  ClaimController.listNonApproveClaim)

/**
 * @swagger
 * /claim:
 *   post:
 *     summary: Cadastra uma nova reivindicação
 *     tags:
 *       - Reivindicações
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
 *                 example: Carteira preta
 *               fileName:
 *                 type: string
 *                 example: carteira.jpg
 *               description:
 *                 type: string
 *                 example: Encontrada perto da cantina
 *               locationFound:
 *                 type: string
 *                 example: 64fa12abc345de6789
 *               dateFound:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-11-22T10:00:00Z
 *               foundBy:
 *                 type: string
 *                 example: 64fa12abc000111222
 *     responses:
 *       201:
 *         description: Reivindicação criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
routes.post('/claim',authMiddleware,  ClaimController.registerClaim)

/**
 * @swagger
 * /claim/{id}:
 *   put:
 *     summary: Atualiza uma reivindicação pelo ID
 *     tags:
 *       - Reivindicações
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Claim'
 *     responses:
 *       200:
 *         description: Reivindicação atualizada com sucesso
 *       404:
 *         description: Reivindicação não encontrada
 */
routes.put('/claim/:id',authMiddleware,  ClaimController.updateClaim)

/**
 * @swagger
 * /approve-claims/{id}:
 *   put:
 *     summary: Aprova uma reivindicação
 *     tags:
 *       - Reivindicações
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reivindicação aprovada com sucesso
 *       404:
 *         description: Reivindicação não encontrada
 */
routes.put('/approve-claims/:id',authMiddleware,  ClaimController.approveClaims)

/**
 * @swagger
 * /claim/{id}:
 *   delete:
 *     summary: Remove uma reivindicação pelo ID
 *     tags:
 *       - Reivindicações
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Reivindicação removida com sucesso
 *       404:
 *         description: Reivindicação não encontrada
 */
routes.delete('/claim/:id',authMiddleware,  ClaimController.deleteClaim)

export default routes