const express =require("express")
const mongoose =require("mongoose");
const Userroute =require("./Routers/user")
const Dataroute =require("./Routers/data")
// const cors =require("cors");
const app=express();
// const whitelist ="http://localhost:3000/"
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (!origin || whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error("Not allowed by CORS"))
//         }
//     },
//     credentials: true,
// }
// app.use(cors(corsOptions));
app.use(express.json())
mongoose.connect("mongodb+srv://tele:partiksingh13508@telebot.gwycl.mongodb.net/Telebot?retryWrites=true&w=majority" ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connected to mongo");
})
.catch((err)=>{
    console.log(err);
})
app.get("/",(req,res)=>{
    res.status(200).json("Working");
})
app.use("/api", Userroute);
app.use("/data" ,Dataroute)
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     next();
// });

app.listen(7000,()=>{
    console.log("The backend is runningdddd fine");
    // console.log(app.address().port);
})