const express = require('express');

const{
    getColaboradores,
    getColaboradorById,
    createColaborador,
    updateColaborador,
    eliminarColaborador
} = require('../controllers/colaboradorController');

const router = express.router;

router.get('/', getColaboradores);
router.get('/:id', getColaboradorById);
router.post('/', createColaborador);
router.put('/:id', updateColaborador);
router.delete('/:id', eliminarColaborador);

module.exports = router;