const express = require('express');
const multer = require('multer');

const uploadConfig = require('./config/upload');

const SessionController = require('../controllers/SessionController');
const SpotController = require('../controllers/SpotController');
const DashboardController = require('../controllers/DashboardController');
const BookingController = require('../controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;

//https://youtu.be/7gu8S-plpbM?t=3429

//GET, POST, PUT e DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição e delete)
//req.body = Acessar corpo da requisição (para criação e edição)
