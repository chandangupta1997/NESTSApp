

const express = require('express')

const router = express.Router()

const taskController = require('../controller/taskController')

const userController = require('../controller/userController')

const auth = require('../middleware/authentication')
const authrisation  =require('../middleware/authorisation')


router.get('/test',function(req,res){
    res.send('app is running smoothly ')
})


router.post('/createTask',taskController.createTask)
router.get('/getTaskById',taskController.getTaskById)




router.post('/createUser',userController.createUser)
router.get("/userTaskDetails",userController.userTaskDetails)


module.exports = router