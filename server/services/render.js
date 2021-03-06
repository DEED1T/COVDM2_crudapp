const CentersDB = require('../model/modelP');
const PatientsDB = require('../model/modelC');
const dotenv = require('dotenv');

// client
exports.homeRoute = (req,res) => {
    res.render('home');
};

exports.moreRoute = (req,res) => {
    res.render('more');
};

exports.rdvVRoute = (req,res) => {
    res.render('rdvV');
};

exports.rdvTRoute = (req,res) => {
    res.render('rdvT');
};

exports.aboutRoute = (req,res) => {
    res.render('about');
};

// API
exports.centersRoute = (req,res) => {

    CentersDB.find({}, function(err, docs) {
        try{
            return res.json({ docs })
        }
        catch(err){
            console.log("Error while accessing centersRoutes :"+ err);
        }
    });
};
