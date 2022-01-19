const express = require('express')
const cors = require(cors)
const helmet = require(helmet)
require('dotenv').config()
const { PORT } = process.env
const authRoute = require('./src/route/authRoute')
const { connectDB } = require('./src/DB/connectDB')

const app = express()


// connect DB
connectDB()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

// Routes
app.use("/api", authRoute)


app.listen(PORT, () => { console.log(`Server is running on localhost:${PORT}`) })