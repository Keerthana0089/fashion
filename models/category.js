const mongoose=require('mongoose')

const TshirtDesignSchema=new mongoose.Schema({
    color:{
        Type:String,
        require:true},
        image:{
            type:String,
            required:true },
        timestamp:{
            type:Date,
            default:Date.now},
});

const TshirtDesign=mongoose.model("TshirtDesign",TshirtDesignSchema);
module.exports={TshirtDesign}