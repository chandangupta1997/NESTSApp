

const taskModel = require('../models/taskModel')



const createTask = async function(req,res){


    const createdTask = await taskModel.create(req.body)
    res.send(createdTask)



}


module.exports ={createTask}