const mongoose = require('mongoose');

var schemaRDV = new mongoose.Schema({
    name : String,
    firstname : String,
    address : String,
    email:String,
    city : String,
    age : Number
});

const askforRDV = mongoose.model('askforRDV',schemaRDV);

module.exports = askforRDV;