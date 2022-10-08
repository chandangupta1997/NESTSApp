

const mongoose = require('mongoose')

const ObjectId= mongoose.Schema.Types.ObjectId


const taskSchema = new mongoose.Schema({


    // id will br created automatically 

    //properties, id, description,due_date, assignee, status

    title :{
        type:String,
        required:true

    },
    description:{

        type:String,
        required:true

    },

    assignedDate:{
        type:Date,
        required:true,


    },

    dueDate:{
        type:Date,
        required:true
    },


    // populating userName for USER 
    assignee:{
        type:ObjectId,
        ref:'user'
    
    },

    assignedTo:{
        type:ObjectId,
        ref:'user'

    },


    status:{
        type:Boolean,
        default:false
    }


},{timeStamps:true})



module.exports = mongoose.model('task',taskSchema)