const express = require('express');

const routes = express.Router();
const userController = require('../controllers/userController');

routes.post('/addUser',userController.addUser);
routes.get('/viewUser',userController.viewUser);

module.exports = routes;