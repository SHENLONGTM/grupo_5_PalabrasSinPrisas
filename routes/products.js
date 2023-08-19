const express = require("express");

const router = express.Router();

const productsController = require("../controllers/productsController");

//crear producto:
router.get("/create-product/", productsController.create);

module.exports = router;