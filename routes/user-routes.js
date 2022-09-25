const Router = require('express').Router
const router = new Router()
const userTaskController = require('../controllers/user-controller')
const authMiddleware = require('../middlewares/auth-middleware')

router.get('/refresh', userTaskController.refresh)
router.get('/tasks', userTaskController.getTasks)
router.post('/set_tasks', userTaskController.setTasks)
router.get('/count', userTaskController.getCount)
router.post('/login', userTaskController.login)
router.get('/logout', userTaskController.logout)
router.get('/is_login', authMiddleware, userTaskController.isValidToken)
router.delete(
  '/delete/:id',
  authMiddleware,
  userTaskController.deleteUserTaskData,
)
router.put(
  '/update_task/:id',
  authMiddleware,
  userTaskController.updateUserTask,
)
router.put(
  '/update_status/:id',
  authMiddleware,
  userTaskController.updateUserStatus,
)

module.exports = router
