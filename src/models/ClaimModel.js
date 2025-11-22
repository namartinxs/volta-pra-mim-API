import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
    itemId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'lost_item'
    },
    claimBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    analyzedBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    statusClaim:{type:mongoose.Schema.Types.String,
            enum: ["nao_reclamado","aprovada", "pendente", "recusada"],
            default: "nao_reclamado"
    },
    comment :{type: mongoose.Schema.Types.String, required:true}

},{versionKey:false,timestamps:true})


const claimItem = mongoose.model("claim_item", claimSchema, "claim_item")

export default {claimItem, claimSchema}