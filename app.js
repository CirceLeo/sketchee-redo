//import cores
const express = require('express');
//body parser
const bodyParser = require('body-parser');
const path = require('path');


//create application
const app = express();

//parse url encoded info
app.use(bodyParser.urlencoded({extended: false}));

//import static css
app.use(express.static(path.join(__dirname, 'public')));

//routes
const userRoutes = require('./routes/user');
 
//set up route
app.use(userRoutes);

//set server to listen at a port
app.listen(3000);