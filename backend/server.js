 var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multer = require('multer');
var promise = require('promise');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/rest_test');
// mongoose.connect('localhost', 'okular');

var app = express();

// Define storage for uploaded videos
var storage = multer.diskStorage({
    destination: function (req, file, callback) {
        console.log(file, req.body);
        callback(null, './uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname + '-' + Date.now());
    }
});

var upload = multer({ storage : storage}).single('userPhoto');


// Define homepage
app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/index.html");
});

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', require('./api'));


// API/ROUTE to hit for video uploads
app.post('/api/photo',function(req,res) {
    console.log("got here", req.body);


    upload(req, res, function(err) {
        if (err) {
            console.log(err);
            return res.end("Error uploading file");
        }
        res.end("File has uploaded");
    });
});


app.listen(3000);
console.log("Api is running on port 3000");