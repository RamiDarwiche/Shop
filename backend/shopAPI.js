require('dotenv').config()

// register dependencies
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')

// initialize express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})  


// routes 
app.use('/api/products', productRoutes)
// app.use('/api/user', userRoutes) to be implemented


// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        // listen to port
        app.listen(process.env.PORT, () => {
          console.log('listening for requests on port', process.env.PORT)
        })
    })
    .catch((err) => {
        console.log(err)
    })
