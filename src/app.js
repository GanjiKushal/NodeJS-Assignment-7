const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const marioModel=require('./models/marioChar')

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// your code goes here
app.get('/mario',async(req,res)=>{
    const data=await marioModel.find()
    res.json({data})
})
app.get('/mario/:id',async(req,res)=>{
    try {
        const data=await marioModel.find({"_id":req.params.id});
        res.json({data})
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})
app.post('/mario',async (req,res)=>{
    try {
         if(req.body.weight){
            if(req.body.weight){
                const data=await marioModel.create(req.body);
                res.status(201).json({data})
            }
        }
        else{
            res.status(400).json({
                        message:'either name or weight is missing'
            })
        }
        
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
        
    }
})
app.patch('/mario/:id',async (req,res)=>{
    try {
        const data =await marioModel.updateOne({"_id":req.params.id},{"weight":req.body.weight});
        res.json({data})
    } catch (error) {
        res.status(400).json({
            message:error.message
        })
    }
})
app.delete('/mario/:id',async (req,res)=>{
    try{
        const _id = req.params.id
        const data = await marioModel.findByIdAndDelete(_id)
        res.json({
            data
        })
    }
    catch(error){
        res.status(400).json({
            message:error.message
        })
    }
})
module.exports = app;