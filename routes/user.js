//user facing routes

//core modules
const express = require('express')
const path = require('path')

const routeDir = require('../util/path')

//router 

const router = express.Router();

//home page
router.get('/', (req, res, next) => {
    console.log('in the homepage')
    res.sendFile(path.join(routeDir, 'views', 'home.html'))
})

module.exports = router