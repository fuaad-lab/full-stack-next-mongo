import mongoose from "mongoose";

let connection: typeof mongoose;

const url = process.env.MONGO_URL 

const connectToDatabase = async () => {
    try {
        if(!connection){
            connection = await mongoose.connect(url as string)
        }
        return connection
    } catch (error) {
        throw new Error(error as string).message
    }
}
export default connectToDatabase;