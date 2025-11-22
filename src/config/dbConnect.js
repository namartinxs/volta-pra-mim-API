import mongoose,{mongo} from "mongoose";

async function connectDb() {
    mongoose.connect(process.env.MONGO_URI)

    return mongoose.connection

}

export default connectDb