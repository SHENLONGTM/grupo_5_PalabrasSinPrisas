const express = require('express');

const router = express.Router();

const detailController = require('../controllers/productDetailController');

//Acceso a página detalle de producto
router.get('/',detailController.getPage);

module.exports = router;