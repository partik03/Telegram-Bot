const mongoose =require("mongoose")
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        unique:true,
        min:10,
        max:40,
        require:true,
    },
    password:{
        type:String,
        require:true,
        min:5
    },
},{
    timestamps:true
},
);
module.exports =mongoose.model("User" ,userSchema);