const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

// client routes
route.get('/', services.homeRoutes);

route.get('/more', services.moreRoutes);

route.get("/rdv", services.rdvRoutes);

route.get("/about", services.aboutRoutes);

// API
route.get('/getCenters', services.centersRoutes);

module.exports = route;