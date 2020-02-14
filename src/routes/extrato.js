const express = require('express');
const router = express.Router();
const controller = require("../controllers/TransferenciasController");


<<<<<<< Updated upstream
router.get('/extrato/detalhes/:transferenciaId', controller.getById)
router.get('/extrato/:usuarioId', controller.getTransferenciasUsuario)
=======
router.get('/detalhes/:transferenciaId', controller.getById)
router.get('/:contaOrigemId', controller.getTransferenciasConta)
>>>>>>> Stashed changes


module.exports = router