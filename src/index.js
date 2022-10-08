


const express = require('express')

const app = express()

const bodyParser = require('body-parser')
const route = require('./router/route')

const mongoose = require('mongoose')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



const mongoString = "mongodb+srv://sonu517825:m0ww1dng9uqrz0ge@cluster0.wgtiy.mongodb.net/TaskManagementApp?retryWrites=true&w=majority" 

mongoose.connect(mongoString, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.listen(3000,console.log('app is running on port 3000'))

app.use('/',route)