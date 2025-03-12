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
router.get('/', createColaborador);
router.get('/:id', updateColaborador);
router.get('/:id', eliminarColaborador);

module.exports = router;