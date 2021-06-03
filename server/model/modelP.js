const mongoose = require('mongoose');

var schemaPatients = new mongoose.Schema({
    vaccinated : Boolean,
    sick : Boolean,
    dead : Boolean,
    center : Number,
    v_date : Date,
    age : Number,

});

const patientsDB = mongoose.model('patientsDB', schemaPatients);

module.exports = patientsDB;
