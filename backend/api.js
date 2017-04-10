/**
 * Created by andyf on 4/10/2017.
 */
var express = require('express');
var router = express.Router();


//Models
var Image = require('./models/images');

//Routes
Image.methods(['get', 'put', 'post', 'delete']);
Image.register(router, '/images');



module.exports = router;