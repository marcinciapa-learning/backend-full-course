import express from 'express'
import db from '../db.js'

const router = express.Router()

// Get all todos for logged-in user
router.get('/', (req, res) => {
    console.log('GET /todos request received for user', req.userId)
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
    const todos = getTodos.all(req.userId)
    res.json(todos)
})

// Create a new todo
router.post('/', (req, res) => {
    const { task } = req.body
    const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES (?, ?)`)
    const result = insertTodo.run(req.userId, task)

    res.json({ id: result.lastInsertRowid, task, completed: 0 })
})

// Update a todo
router.put('/:id', (req, res) => {
    const { completed } = req.body
    const { id } = req.params

    // Comparing to the original course, current user cannot update task belonging to other user
    const updateTodo = db.prepare('UPDATE todos SET completed = ? WHERE id = ? AND user_id = ?')
    updateTodo.run(completed, id, req.userId)
    res.json({ message: "Todo completed" })
})

// Delete a todo
router.delete('/:id', (req, res) => {
    const { id } = req.params
    const { userId } = req

    const deleteTodo = db.prepare('DELETE FROM todos WHERE id = ? and user_id = ?')
    deleteTodo.run(id, userId)

    res.json({ message: "Todo deleted" })
})

export default router