const express = require('express');

const router = express.Router();

const loginController = require('../controllers/loginController');

//Acceso a página login
router.get('/',loginController.getPage);

module.exports = router;