require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRouter');
const taskRoutes = require('./routes/taskRouter');

const app = express();
app.use(express.json());

connectDB();

app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
