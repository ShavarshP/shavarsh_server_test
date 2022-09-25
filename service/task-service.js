const TaskModal = require('../models/task-model')

class TaskService {
  async getTasks(page, limit, name, email) {
    let sort = { $natural: -1 }
    if (name) {
      sort = name === 'A-Z' ? { name: 1 } : { name: -1 }
    } else if (email) {
      sort = email === 'A-Z' ? { email: 1 } : { email: -1 }
    }
    const tasks = await TaskModal.find()
      .sort(sort)
      .skip(page * limit)
      .limit(limit)
    return tasks
  }

  async getCount() {
    const count = await TaskModal.count()
    return count
  }

  async setTasks(email, name, task) {
    const newTask = await TaskModal.create({
      email,
      name,
      task,
    })
    return newTask
  }

  async updateUserStatus(id, status) {
    await TaskModal.updateOne({ _id: id }, { isDone: status })
    return { isUpdate: true }
  }

  async updateUserTask(id, task) {
    await TaskModal.updateOne({ _id: id }, { task, edited: true })
    return { isUpdate: true }
  }

  async deleteUserTaskData(id) {
    await TaskModal.deleteOne({ _id: id })
    return { isUpdate: true }
  }
}

module.exports = new TaskService()
