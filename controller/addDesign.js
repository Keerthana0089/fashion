const mongoose=require('mongoose')
const{TshirtDesign}=require("../models/category");
const postTshirtDesignController=async (req,res)=>{
    const session =await mongoose.startSession();
    session.startTransaction();
    try{
        const formData=req.body;
        const requiredFields=['color','image'];
        const missingFields=requiredFields.filter(field=>!formData[field]);
        if(missingFields.length>0){
            return res.status(400).json({
                success:false,
                error:`Missing required fields:${missingFields.join(",")}`,

            });
        }
        const newDesign={
            color:formData.color,
            image:formData.image,
            timestamp:new Data(),

        };
        const savedDesign =await TshirtDesign.create([newDesign],{session});
        await session.commitTransaction();
        res.status(201).json({
            success:true,
            message:'T-shirt design saved Successfully!',
            data:savedDesign,
        });

    }catch(error){
        await session.abortTransaction();
        console.error("Error saving T-shirt design:",error);
        res.ststus(500).json({
            success:false,
            error:"Internal server error",
            message:error.message,
        });
    }finally{
        session.endSession();
    }
};

module.exports=postTshirtDesignController;