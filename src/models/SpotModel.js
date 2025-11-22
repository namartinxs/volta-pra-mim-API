import mongoose from "mongoose";

// CREATE TABLE `Localizacao` (
//   `id` integer PRIMARY KEY,
//   `nome` varchar(100) NOT NULL,
//   `descricao` varchar(180) NOT NULL
// );

const SpotSchema = new mongoose.Schema({
    description:{type:mongoose.Schema.Types.String},
    local:{type:mongoose.Schema.Types.String,required:true}
    
},{versionKey:false,timestamps:true})

const Spot = mongoose.model("spot", SpotSchema, "spot")

export default {Spot, SpotSchema}

