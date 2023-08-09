const express = require('express');

const router = express.Router();

const mainController = require('../controllers/mainController');

//Acceso a página inicio
router.get('/',mainController.getPage);
router.get('/home',mainController.getPage);

module.exports = router;