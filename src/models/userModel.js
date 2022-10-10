const mongoose = require('mongoose')

const ObjectId= mongoose.Schema.Types.ObjectId
const Array = mongoose.Schema.Types.Array


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



    assignedTask:[],
    
    // {
    //     type:Array  // it will conatin unique mongoDb id of task 
    //         // [63414d3cd4f03f0cf766f669,63414d67190705de854cfbbf] and we will populate this 
    // },

    

    email:{
        type:String

    },

    password:{

        type:String

    }

},{timeStamps:true})



module.exports = mongoose.model('user',userSchema)