import mongoose from 'mongoose'

// Defining Schema
const todoSchema = new mongoose.Schema({
    task:{type:"string",required:true,trim:true},
})


// Model
const todoModel = new mongoose.model("todo",todoSchema)


export default todoModel