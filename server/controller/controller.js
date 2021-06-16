const PatientsDB = require('../model/modelP');
const CentersDB = require('../model/modelC');
const askforRDV = require('../model/modelR');


//create RDV
exports.create = (req,res) => {
    // validate request
    if(!req.body){
        res.status(400).send({message : "Content can not be empty"});
        return;
    }

    //new RDV
    const rdv = new askforRDV({
        
        name: req.body.name,
        firstname: req.body.firstname,
        address: req.body.address,
        email: req.body.email,
        city: req.body.city,
        age: req.body.age

    });

    //save rdv in MONGO
    rdv
        .save(rdv)
        .then(data => {
            res.redirect("/");
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occured while creating RDV"
            });
        });
    
    
}