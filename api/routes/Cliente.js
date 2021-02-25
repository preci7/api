const express = require('express')
const {Cliente} = require('../models/Cliente')
const router = express.Router();
const clienteController = require('../controllers/ClienteController');

router.get('/list', clienteController.list);
router.post('/add', clienteController.add);
router.put('/update', clienteController.update);
router.delete('/remove', clienteController.remove);

module.exports = router;
