

const userModel = require('../models/userModel')


const createUser = async function(req,res){

    console.log(req.body.assignedTask)

    const createdUser =  await userModel.create(req.body)


    res.send(createdUser)
}

module.exports ={createUser}