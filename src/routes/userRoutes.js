import express from "express"
import UserController from "../controllers/UsersController.js";


const routes = express.Router()
// GET /user
routes.get('/user',UserController.listUsers);
// GET /user/:id
routes.get('/user/:id',UserController.listUserbyId);
//GET/ non-disable-user
routes.get('/non-disable-user',UserController.listNonDisableUsers)
// POST /user
routes.post('/user',UserController.registerUser);
// PUT /user/:id
routes.put('/user/:id',UserController.updateUser);
//PUT/disable-user/:id
routes.put('/disable-user/:id',UserController.disableUser);
// DELETE /user/:id
routes.delete('/user/:id',UserController.deleteUser);

export default routes