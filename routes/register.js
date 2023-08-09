const express = require('express');

const router = express.Router();

const registerController = require('../controllers/registerController');

//Acceso a página registro
router.get('/',registerController.getPage);

module.exports = router;