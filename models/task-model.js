const { Schema, model } = require('mongoose')

const TaskSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  time: { type: Date, default: Date.now },
  edited: { type: Boolean, default: false },
  isDone: { type: Boolean, default: false },
  task: { type: String, required: true },
})

module.exports = model('Task', TaskSchema)
