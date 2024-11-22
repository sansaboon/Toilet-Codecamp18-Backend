// Step 1 import ......
const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors')

// import fs
const {readdirSync} = require("fs");
const handleError = require("./middlewares/error");
const notFoundHandler = require("./middlewares/not-found");
//Routing
const authRoutes =require("./routes/auth")
const memberRoutes =require("./routes/member");
const landmarkRoutes = require("./routes/landmark")

// Step 3 middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())


//Step 4 Routing
readdirSync('./routes')
.map((c)=> app.use('/api',require('./routes/'+c)))



app.use('/api',authRoutes)
app.use('/api',memberRoutes)
app.use('/api',landmarkRoutes)

app.use(handleError)
app.use("*",notFoundHandler)










// Step 2 Start Server

app.listen(5000,()=>console.log("Server is running on port 5000"))