import express from "express"
import connectDb from "./config/dbConnect.js"

import routes from "./routes/index.js"
const connection = await connectDb()

connection.on("error",(erro)=>{
    console.error("erro de conexao",erro)
}) 

connection.once("open",()=>{
    console.log("conexao bem sucedida")
})

const app = express() 
routes(app)


export default app



