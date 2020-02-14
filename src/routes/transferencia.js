const express = require('express');
const router = express.Router();
const controller = require("../controllers/TransferenciasController")

router.post('/outrosBancos/:contaId', controller.newTransferExterna)
router.post('/ava/', controller.newTransferInterna) 
router.post('/', controller.getTransferenciasConta)

module.exports = router