/**
 * Created by andyf on 4/10/2017.
 */
//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;


//Schema
var userSchema = new mongoose.Schema({
    userName: String,
    password: String
});

//Return model
module.exports = restful.model('Users', userSchema);
