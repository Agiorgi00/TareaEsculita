const express = require('express');
const { body, param } = require('express-validator');
const {
    getProyectos,
    getProyectoById,
    createProyecto,
    updateProyecto,
    deleteProyecto
} = require('../controllers/proyectoController');

const router = express.Router();

router.get('/', getProyectos);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getProyectoById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('cliente').isMongoId().withMessage('Cliente inválido'),
    body('tribu').isMongoId().withMessage('Tribu inválida'),
    createProyecto
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    updateProyecto
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    deleteProyecto
);

module.exports = router;


module.exports = router;