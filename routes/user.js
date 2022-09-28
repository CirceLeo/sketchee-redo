//user facing routes
//core mods
const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

//router creation
const router = express.Router();

//Homepage for the user when connected through a get
router.get('/', (req, res, next) =>{
    //send html info as a res when hit as get method
    res.sendFile(path.join(rootDir, 'views', 'home.html'));
});

module.exports = router;