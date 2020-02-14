const express = require('express');
const router = express.Router();
const controller = require("../controllers/TransferenciasController")

router.post('/outrosBancos/:contaId', controller.newTransferExterna)
router.post('/ava/:contaDestino/:contaId', controller.newTransferInterna) 

module.exports = router