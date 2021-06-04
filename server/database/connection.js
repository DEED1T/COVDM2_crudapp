const mongoose = require('mongoose');
const dotenv = require('dotenv');


const connectDB = async () => {
    try{
        // mongoDB connection STRING
        const con = await mongoose.connect(process.env.MONGO_URl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true,
            useCreateIndex: true
        });

        console.log(`MongoDB connecté : ${con.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;