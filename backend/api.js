/**
 * Created by andyf on 4/10/2017.
 */
var express = require('express');
var router = express.Router();


//Models
var Video = require('../models/video');
var User = require('../models/user');

//Routes
User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

Video.methods(['get', 'put', 'post', 'delete']);
Video.register(router, '/videos');


module.exports = router;