const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'pending' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Tasks', TaskSchema);
