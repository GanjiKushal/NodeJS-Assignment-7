const mongoose = require('mongoose');
//  Your code goes here
mongoose.pluralize(null)
// mongoose.connect("mongodb://localhost/testaroo")
const marioSchema =new mongoose.Schema({
    name:{type:String,required:true},
    weight:{type:Number,required:true}
})
const marioModel=mongoose.model("marioModel",marioSchema)
module.exports =marioModel;
