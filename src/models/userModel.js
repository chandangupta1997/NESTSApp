const mongoose = require('mongoose')

const ObjectId= mongoose.Schema.Types.ObjectId


const userSchema = new mongoose.Schema({


    fName:{

        type:String

    },

    lName:{
        type:String
    },

    age:{

        type:Number

    },

    teamName:{
        type:String

    },



    assignedTasked:{
        type:[]
    }



    





},{timeStamps:true})



module.exports = mongoose.model('user',userSchema)