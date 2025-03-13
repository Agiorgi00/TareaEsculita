const express = require('express');
const { body, param } = require('express-validator');

const{
    getProyecto,
    createProyecto,
    deleteProyecto,
    updateProyecto,
    getProyectos

} = require('../controllers/proyectoControllers');

const router = express.router();

router.get('/', getProyectos);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getProyecto
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