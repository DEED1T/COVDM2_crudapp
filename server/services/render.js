const CentersDB = require('../model/modelP');
const PatientsDB = require('../model/modelC');
const dotenv = require('dotenv');

// client
exports.homeRoutes = (req,res) => {
    res.render('home');
};

exports.moreRoutes = (req,res) => {
    res.render('more');
};

exports.rdvRoutes = (req,res) => {
    res.render('rdv');
};

exports.aboutRoutes = (req,res) => {
    res.render('about');
};

// API
exports.centersRoutes = (req,res) => {

    CentersDB.find({}, function(err, docs) {
        try{
            return res.json({ docs })
        }
        catch(err){
            console.log("Error while accessing centersRoutes :"+ err);
        }
    });
};
