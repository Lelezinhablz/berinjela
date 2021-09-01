const express = require("express");
const router = express.Router();

var calculos = require("../controller/calculo");

    router.get('/add', calculos.abreAdd);

    router.post('/add', calculos.add);


module.exports = router;