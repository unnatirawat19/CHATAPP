import mongoose from "mongoose";


const connectToMongoDB= async ()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URI);
       console.log("Connected to DB");
    }
    catch(error){
        console.log("Error in connecting DB", error.message);
    }
}

export default connectToMongoDB;