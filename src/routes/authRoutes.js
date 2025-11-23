import {Router} from "express"
import {login,logout,authValidate} from "../controllers/authController.js"

const routes = Router()
routes.post('/login',login)
routes.post('/logout',logout)
routes.post('/validate',authValidate)

export default routes