import express from 'express'
const router = express.Router()
import todoControllers from '../controllers/todoController.js'

// GET / - Home page
router.get('/', todoControllers.getTodo)
router.post('/', todoControllers.createTodo)
router.get('/:id', todoControllers.getTodoById)
router.put('/:id', todoControllers.UpdateTodoById)
router.delete('/:id', todoControllers.deleteTodoById)


export default  router