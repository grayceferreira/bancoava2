const express = require('express');
const authMiddware = require('../middlewares/auth');

const router = express.Router();



const controller = require("../controllers/UsuariosController")

router.post('/login', controller.login)
router.use(authMiddware);
router.post('', controller.add)
router.get('', controller.getAll)
router.get('/:id', controller.getById)
router.patch('/:id', controller.update)
router.delete('/:id', controller.remove)

module.exports = router