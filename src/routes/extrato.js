const express = require('express');
const router = express.Router();
const controller = require("../controllers/TransferenciasController");


router.get('/detalhes/:transferenciaId', controller.getById)
router.get('/:contaOrigemId', controller.getTransferenciasConta)


module.exports = router