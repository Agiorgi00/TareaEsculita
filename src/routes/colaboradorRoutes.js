const express = require('express');
const auth = require('../middleware/authMiddleware');
const { body, param } = require('express-validator');
const {
    getColaboradores,
    getColaboradorById,
    createColaborador,
    updateColaborador,
    deleteColaborador
} = require('../controllers/colaboradorController');

const router = express.Router();

router.get('/', auth , getColaboradores);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, getColaboradorById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('perfil').isMongoId().withMessage('Perfil inválido'),
    auth, createColaborador
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    body('email').optional().isEmail().withMessage('Debe ser un email válido'),
    auth, updateColaborador
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, deleteColaborador
);

module.exports = router;
