

const express = require('express')

const router = express.Router()

const taskController = require('../controller/taskController')

const userController = require('../controller/userController')


router.get('/test',function(req,res){
    res.send('app is running smoothly ')
})


router.post('/createTask',taskController.createTask)




router.post('/createUser',userController.createUser)



module.exports = router