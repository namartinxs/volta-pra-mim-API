import express from "express"
import UserController from "../controllers/UsersController.js"

const routes = express.Router()

/**
 * @swagger
 * tags:
 *   name: Usuários
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Lista todos os usuários
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários retornada com sucesso
 */
routes.get('/user', UserController.listUsers)

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     summary: Busca um usuário pelo ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
routes.get('/user/:id', UserController.listUserbyId)

/**
 * @swagger
 * /non-disable-user:
 *   get:
 *     summary: Lista usuários que não estão desativados
 *     tags:
 *       - Usuários
 *     responses:
 *       200:
 *         description: Lista de usuários ativos
 */
routes.get('/non-disable-user', UserController.listNonDisableUsers)

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Cadastra um novo usuário
 *     tags:
 *       - Usuários
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, status, type]
 *             properties:
 *               name:
 *                 type: string
 *                 example: Maria Silva
 *               email:
 *                 type: string
 *                 example: maria@email.com
 *               status:
 *                 type: string
 *                 enum: [ativo, inativo]
 *               type:
 *                 type: string
 *                 enum: [student, administrator]
 *               administrator:
 *                 type: object
 *                 properties:
 *                   role:
 *                     type: string
 *                     example: Diretora
 *               student:
 *                 type: object
 *                 properties:
 *                   course:
 *                     type: string
 *                     example: Análise e Desenvolvimento de Sistemas
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Dados inválidos
 */
routes.post('/user', UserController.registerUser)

/**
 * @swagger
 * /user/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [ativo, inativo]
 *               type:
 *                 type: string
 *                 enum: [student, administrator]
 *               administrator:
 *                 type: object
 *                 properties:
 *                   role:
 *                     type: string
 *               student:
 *                 type: object
 *                 properties:
 *                   course:
 *                     type: string
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
routes.put('/user/:id', UserController.updateUser)

/**
 * @swagger
 * /disable-user/{id}:
 *   put:
 *     summary: Desativa um usuário pelo ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário desativado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
routes.put('/disable-user/:id', UserController.disableUser)

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: Deleta um usuário pelo ID
 *     tags:
 *       - Usuários
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário removido com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
routes.delete('/user/:id', UserController.deleteUser)

export default routes
