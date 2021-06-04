const CentersDB = require('../model/modelP');
const PatientsDB = require('../model/modelC');
const dotenv = require('dotenv');


exports.homeRoutes = (req,res) => {
    res.render('home');
}

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