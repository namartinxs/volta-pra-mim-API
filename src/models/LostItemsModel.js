import mongoose from "mongoose";
// id: {type: mongoose.Schema.Types.ObjectId,required:true},
//OBJETO DE CONFIG as propiedades dos objetos
const LostSchema = new mongoose.Schema({
    itemName:{type:mongoose.Schema.Types.String},
    fileName:{ type: mongoose.Schema.Types.String},
    statusItem:{type:mongoose.Schema.Types.String,
        enum: ["aguardando_reclamacao", "reclamado", "devolvido"],
        default: "aguardando_reclamacao"
    },
    description:{type:mongoose.Schema.Types.String},
    locationFound:{type:mongoose.Schema.Types.String},
    dateFound:{type:mongoose.Schema.Types.Date},
    foundBy: {type:mongoose.Schema.Types.String},
    receivedBy: {type:mongoose.Schema.Types.String},
    collectedBy: {type:mongoose.Schema.Types.String},
    dateColleted:{type:mongoose.Schema.Types.Date}

},{versionKey:false,timestamps:true})

//referencia a colecao
//modelo é um objeto q representa uma colecao na base de dados 
const LostItem = mongoose.model("lost_item", LostSchema, "lost_item")

export default {LostItem, LostSchema}
// export default LostItem