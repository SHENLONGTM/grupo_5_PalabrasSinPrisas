const express = require('express');

const router = express.Router();

const productCartControllerController = require('../controllers/productCartController');

//Acceso a página carrito de compras
router.get('/',productCartControllerController.getPage);

module.exports = router;