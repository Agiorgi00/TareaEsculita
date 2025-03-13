const express = ('express');

const{
    getRubro,
    getRubros,
    createRubro,
    deleteRubro,
    updateRubro

} = require('../controllers/rubroControllers');

const router = express.router;

router.get('/', getRubro);
router.get('/.id', getRubros);
router.post('/', createRubro);
router.put('/:id', updateRubro);
router.delete('/:id', deleteRubro);

module.exports = router;