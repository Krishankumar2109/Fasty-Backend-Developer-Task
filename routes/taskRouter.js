const express = require('express');
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


// Create a Task
router.post('/', authMiddleware, createTask);
 // Retrieve All Tasks 
router.get('/', authMiddleware, getAllTasks);
// Retrieve a Single Task
router.get('/:id', authMiddleware, getTaskById);
 // Update a Task
router.put('/:id', authMiddleware, updateTask); 
// Delete a Task
router.delete('/:id', authMiddleware, deleteTask);
 

module.exports = router;
