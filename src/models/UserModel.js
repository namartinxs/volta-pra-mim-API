import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name:{type:mongoose.Schema.Types.String,required:true} ,
  email: {type:mongoose.Schema.Types.String,required:true,unique: true},
  status: {
    type: String,
    enum: ["active", "inactive"],
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


const User = mongoose.model("user", UserSchema)

export default {User, UserSchema}