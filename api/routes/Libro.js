const express = require('express')
const router = express.Router();
const libroController = require('../controllers/LibroController');

router.get('/list', libroController.list);
router.post('/add', libroController.add);
router.put('/update', libroController.update);
router.delete('/remove', libroController.remove);


module.exports = router;