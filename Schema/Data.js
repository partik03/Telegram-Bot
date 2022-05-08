const mongoose =require("mongoose");

const dataSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    date:{
        type:String,
        require:true,
    },
    day:{
        type:String,
        min:3,
        require:true,
    },
    timings:{
        type:String,
    },
    duration:{
        type:Number,
    },
    marks:{
        type:Number
    }
},
{
    timestamps:true
},
)

module.exports=mongoose.model("Data" ,dataSchema);