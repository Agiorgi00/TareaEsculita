const express = require('express');
const { body, param } = require('express-validator');
const {
    getColaboradores,
    getColaboradorById,
    createColaborador,
    updateColaborador,
    deleteColaborador
} = require('../controllers/colaboradorController');

const router = express.Router();

router.get('/', getColaboradores);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getColaboradorById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('perfil').isMongoId().withMessage('Perfil inválido'),
    createColaborador
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    body('email').optional().isEmail().withMessage('Debe ser un email válido'),
    updateColaborador
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    deleteColaborador
);

module.exports = router;
