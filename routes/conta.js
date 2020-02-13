const express = require('express');
const router = express.Router();
const controller = require("../controllers/ContasController");


router.post('/:usuarioId/novaConta', controller.newAccount)
router.get('', controller.getAll)
router.get('/:id', controller.getById)

module.exports = router