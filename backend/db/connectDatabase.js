import mongoose from 'mongoose'
const connectDB = async (DATABASE_URL)=>{
    try {
        const DB_OPTIONS = {
            dbName:"todo",
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connnect Successfully..");
    } catch (error) {
        console.log("error bhai",error)
    }
}

export default connectDB; 