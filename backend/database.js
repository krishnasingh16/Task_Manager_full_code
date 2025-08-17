import mongoose from "mongoose";

const ConnectTOdb = async ()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log("Connected");
       
    } catch (error) {
        console.log(error in connecting);
        
    }
}

export default ConnectTOdb;