

const taskModel = require('../models/taskModel')

const validator = require('../Validations/validations')



const createTask = async function(req,res){


    // destructuring for validations and manipulations 

    const {title,description,assignedDate,dueDate,assignee, assignedBy,status} =req.body

   

    // validation example 

    if(!(validator.isValid(title))){
        return res.status(400).send({staus:false,msg:"please provide valid title"})
    }

    // rest can be done in the same way 



    // now constructing an object for creating document as per our schema of taskModel.
    //as above we already done validations and manipulations 
    const mongoDocument ={

        "title":title,
        "description":description,
        "assignedDate" :assignedDate,
        "dueDate":dueDate,
        "assignee":assignee,
        "assignedBy":assignedBy,
        "status":status
        
    }
  
    const createdTask = await taskModel.create(mongoDocument)
    res.send(createdTask)



}


module.exports ={createTask}