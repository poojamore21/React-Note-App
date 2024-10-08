
const mongoose=require('mongoose');

const noteSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    pinned:{
        type: Boolean,
        default: false
    }
})

const userNoteModel= mongoose.model("Note", noteSchema);

module.exports= userNoteModel;


