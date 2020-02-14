const express = require('express');
const router = express.Router();
const controller = require("../controllers/ContasController");


router.post('/novaConta/:usuarioId', controller.newAccount)
router.get('', controller.getAll)
router.get('/detalhes/:id', controller.getContaById) 
router.get('/:usuarioId', controller.getContasUsuario)

module.exports = router