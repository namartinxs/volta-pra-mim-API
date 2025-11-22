import express from "express"
import connectDb from "./config/dbConnect.js"
import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./config/swagger.js"
import routes from "./routes/index.js"
const connection = await connectDb()

connection.on("error",(erro)=>{
    console.error("erro de conexao",erro)
}) 

connection.once("open",()=>{
    console.log("conexao bem sucedida")
})

const app = express() 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
routes(app)


export default app



