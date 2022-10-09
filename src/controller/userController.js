

const userModel = require('../models/userModel')

const generateToken = require('../middleware/generateToken')


const createUser = async function(req,res){

    const {fName,lName,age,teamName,assignedTask} = req.body 

    console.log(assignedTask)

    







    const mongoObject ={
        "fName":fName,
        "lName":lName,
        "age":age,
        "teamName":teamName,
        "assignedTask":assignedTask
    }

    const createdUser =  await userModel.create(mongoObject)



    res.send(createdUser)
}


const login = async function(req,res){


   

    const {emailId,password}=req.body
    //validations 

    const user = await userModel.findOne(emailId)

    if(!user){
        return res.send('no user Found with this email id ')
    }


    // matching password 

    if(!(user.password ===password)){

        return res.send("password does not match ")
    }

    let tokenWithId  = generateToken.generateToken(user)
    if (!tokenWithId) return res.status(404).send({ status: false, message: "There is an error occure to generate token. more details move on console" })

    res.setHeader('authorization', tokenWithId.token)
    console.log("Security details", tokenWithId)


    return res.status(200).send({ status: true, msg: `User login successfully`, data: tokenWithId })






    

}

module.exports ={createUser}