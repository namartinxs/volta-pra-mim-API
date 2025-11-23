import {Router} from "express"
import {login,logout,authValidate} from "../controllers/authController.js"

const routes = Router()
routes.post('/login',login)
routes.post('/logout',logout)
routes.get('/validate',authValidate)

export default routes