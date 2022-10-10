


const express = require('express')

const app = express()

const bodyParser = require('body-parser')
const route = require('./router/route')

require('dotenv').config()
const mongoose = require('mongoose')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))



mongoose.connect(process.env.mongoString, {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )




app.listen(process.env.port,console.log(`app is running on port ${process.env.port}`))

app.use('/',route)