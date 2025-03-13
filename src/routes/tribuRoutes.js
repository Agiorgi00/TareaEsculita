const express = ('express');

const{
    getTribu,
    createTribu,
    updateTribu,
    deleteTribu,
    getTribus

} = require('../controllers/tribuControllers');

const router = express.router;

router.get('/', getTribus);
router.get('/:id', getTribu);
router.post('/', createTribu);
router.put('/:id', updateTribu);
router.delete('/:id', deleteTribu);

module.exports = router;