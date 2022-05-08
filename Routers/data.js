const express =require("express");
const Data =require("../Schema/Data");
const router =express.Router();

router.post("/data" , async(req,res)=>{
    try {
        const Body =req.body;
        const newData= new Data(Body);
        const Daata = await newData.save();
        res.status(200).json(Daata);
    } catch (error) {
        res.status(400).json(error);
    }
})

module.exports =router;