import mongoose from "mongoose";
// id: {type: mongoose.Schema.Types.ObjectId,required:true},
//OBJETO DE CONFIG as propiedades dos objetos
const LostSchema = new mongoose.Schema({
    itemName:{type:mongoose.Schema.Types.String,required:true},
    fileName:{ type: mongoose.Schema.Types.String,required:true},
    statusItem:{type:mongoose.Schema.Types.String,
        enum: ["aguardando_reclamacao", "reclamado", "devolvido"],
        default: ["aguardando_reclamacao"]
    },
    description:{type:mongoose.Schema.Types.String},
    locationFound:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'spot'
    },
    dateFound:{type:mongoose.Schema.Types.Date,required:true},
    foundBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    receivedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    collectedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    dateColleted:{type:mongoose.Schema.Types.Date}

},{versionKey:false,timestamps:true})

//referencia a colecao
//modelo é um objeto q representa uma colecao na base de dados 
const LostItem = mongoose.model("lost_item", LostSchema, "lost_item")

export default {LostItem, LostSchema}
// export default LostItem