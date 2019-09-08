const express = require ('express')
const mongoose = require('mongoose')

const app = express()
mongoose.connect(`mongodb://localhost:27017/bdexames`, {
    useNewUrlParser: true
})


app.use(express.json())

app.use(require('./routes'))



app.listen(3000, ()=> {
    console.log('servidor Online')
})