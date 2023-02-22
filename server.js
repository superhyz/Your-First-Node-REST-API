require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
// const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log('Connected to Database'))

mongoose.connect("mongodb://0.0.0.0:27017/Subscriberdb") //0.0.0.0:27017 new version , old localhost:27017
.then(() => {
    console.log("MONGO CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!")
    console.log(err)
})

app.listen(4000,()=>{
    console.log("Server is listening on port 4000")
})


app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))