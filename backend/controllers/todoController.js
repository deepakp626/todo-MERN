import todoModel from "../models/todoSchema.js"

class todoControllers {
    static getTodo = async (req, res) => {
        try {
            const result =await todoModel.find();
            res.send(result);
        } catch (error) {
            console.log("Error -->",error)
        }
    }
    static createTodo = async (req, res) => {
        try {
            const {task} = await req.body
            const doc = todoModel({task:task})
            const result = await  doc.save();
            res.status(200).send(result)
        } catch (error) {
            console.log("Error -->",error)
            res.send("Error occour")
        }
    }

    static getTodoById = async (req, res) => {
        try {
            const id = await req.params.id;
            const result = await todoModel.findOne({_id:id});
            res.send(result)
        } catch (error) {
            console.log("Error -->>",error)
        }
    }
    static UpdateTodoById =async (req, res) => {
        try {   
            const id = await req.params.id;
            const {task} = req.body;
            await todoModel.updateOne({"_id": id}, {$set: {"task": task}})
            res.send("updation is done ")
        } catch (error) {
            console.log("Error -->>",error)
        }
    }
    static deleteTodoById =async (req, res) => {
        try {
            const id = await req.params.id;
            const result = await todoModel.deleteOne({_id: id})
            res.send(JSON.stringify(result))
        } catch (error) {
            console.log("Error -->>",error)
        }
    }
}

export default todoControllers