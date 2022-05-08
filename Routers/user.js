const express =require("express");
const User =require("../Schema/User")
const bcrypt =require("bcrypt")
const router =express.Router()
router.get("/",(req,res)=>{
    res.status(200).json("working");
})
router.post("/signUp",async (req,res) =>{
    try {
        const Body= req.body;
        const salt =await bcrypt.genSalt(10);
        const hashedPassword =await bcrypt.hash(Body.password ,salt);
        const ifUser = await User.findOne({email:Body.email});
        if(!ifUser){
            const newUser =new User({
             username : Body.username,
             email:Body.email,
             password:hashedPassword
            })
            const user = await newUser.save();
            res.status(200).json(user._id)
        }
        else{
            res.status(300).json("A user with this email already exits")
        }
    } catch (error) {
        res.status(400).json(error);
    }
})

router.post("/login",async(req,res) =>{
    try {
        const Body =req.body;
        const ifUser =await User.findOne({username:Body.username})
        if (!ifUser) {
            res.status(400).json("User is not registered plz sign up");
        }
        const validatePass =await bcrypt.compare(Body.password, ifUser.password);
        if(!validatePass){
          res.status(400).json("Wrong Password");
        }
        res.status(200).json({id:ifUser._id,username:ifUser.username});
    } catch (error) {
        res.status(500).json(error);
    }
})
module.exports = router;