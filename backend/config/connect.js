const mongoose = require("mongoose");//import 

const url="mongodb://127.0.0.1:27017/notesApp";

const dbConnect = async ()=>{
     mongoose.connect(url);
     console.log("connected to mongoDB");
}
module.exports=dbConnect;

