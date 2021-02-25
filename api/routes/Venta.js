const express = require('express')
const router = express.Router();
const ventaController = require('../controllers/VentaController');

router.get('/list', ventaController.list);
router.post('/add', ventaController.add); 
router.delete('/delete', ventaController.delete); 
router.put('/', ventaController.update); 
router.get('/', ventaController.findById);

module.exports = router;