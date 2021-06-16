const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

// client routes
route.get('/', services.homeRoute);

route.get('/more', services.moreRoute);

route.get("/rdv", services.rdvRoute);

route.get("/about", services.aboutRoute);

// API
route.get('/getCenters', services.centersRoute);
route.post('/api/rdv', controller.create)

module.exports = route;