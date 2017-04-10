/**
 * Created by andyf on 4/10/2017.
 */
//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var imageSchema = new mongoose.Schema({
    imageName: String,
    imagePath: String
});

//Return model
module.exports = restful.model('Images', imageSchema);
