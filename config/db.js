const mongoose=require("mongoose")

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB connected Successfully");

    }catch(err){
        console.log("Error connecting to MongoDb",err)
    }
}
module.export = connectDB;