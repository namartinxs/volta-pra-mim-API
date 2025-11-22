import express from "express"
import connectDb from "./config/dbConnect.js"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./config/swagger.js"
import routes from "./routes/index.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv";

dotenv.config();

const connection = await connectDb()


connection.on("error",(erro)=>{
    console.error("erro de conexao",erro)
}) 

connection.once("open",()=>{
    console.log("conexao bem sucedida")
})

const app = express()


// middleware
app.use(express.json())
app.use(cookieParser())

// cors dominio diferente
app.use(cors({
    origin: "http://localhost:3000", // trocar pelo dominio do front
    credentials: true
}))

// doc
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// rota
routes(app)


export default app



