import express from "express"
import UserController from "../controllers/UsersController.js";


const routes = express.Router()
// GET /user
routes.get('/user',UserController.listUsers);
// GET /user/:id
routes.get('/user/:id',UserController.listUserbyId);
// POST /user
routes.post('/user',UserController.registerUser);
// PUT /user/:id
routes.put('/user/:id',UserController.updateUser);
// DELETE /user/:id
routes.delete('/user/:id',UserController.deleteUser);

export default routes