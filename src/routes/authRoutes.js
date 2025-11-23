import {Router} from "express"
import {login,logout} from "../controllers/authController.js"

const routes = Router()
routes.post('/login',login)
routes.post('/logout',logout)

export default routes