import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:{type:mongoose.Schema.Types.String,required:true} ,
  email: {type:mongoose.Schema.Types.String,required:true,unique: true},
  password: {type:mongoose.Schema.Types.String,required:true},
  status: {
    type: String,
    enum: ["ativo", "inativo"],
    required: true
  },
  type: {
    type: String,
    enum: ["student", "administrator"],
    required: true
  },
  administrator: {
    role: String
  },
  student: {
    course: String
  }

},{versionKey:false,timestamps:true})


const User = mongoose.model("user", UserSchema, "user")

export default {User, UserSchema}