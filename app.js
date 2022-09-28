//import cores
const express = require('express');
const path = require('path')

const bodyParser = require('body-parser')

//create app
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
//routes
const userRoutes = require('./routes/user')

app.use(userRoutes)
//set server to listen to port

app.listen(3000)