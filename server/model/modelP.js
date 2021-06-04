const mongoose = require('mongoose');

var schemaPatients = new mongoose.Schema({
    id : Number,
    stats : Array

});

const PatientsDB = mongoose.model('patients', schemaPatients);

module.exports = PatientsDB;
