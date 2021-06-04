const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/* 
    route d'accueil
*/
route.get('/', services.homeRoutes);

// API
route.get('/getCenters', services.centersRoutes);

module.exports = route;