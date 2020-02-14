const express = require('express');
const router = express.Router();
const controller = require("../controllers/TransferenciasController");


router.get('/extrato/detalhes/:transferenciaId', controller.getById)
router.get('/extrato/:usuarioId', controller.getTransferenciasUsuario)


module.exports = router