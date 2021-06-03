const mongoose = require('mongoose');

var schemaCenters = new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    address:{
        type : String,
        required: true
    },
    region:{
        type : Number,
        required: true
    },
    long:{
        type : Number,
        required: true
    },
    lat:{
        type : Number,
        required: true
    },
    public:{
        type : String,
        required: true
    },
    timetable: String,
    checkapp : String,
    phoneapp : String,
    webapp : String,
    restricted : Boolean
});

const centersDB = mongoose.model('centersDB', schemaCenters);

module.exports = centersDB;
