const express = require('express');
const auth = require('../middleware/authMiddleware');
const { body, param } = require('express-validator');
const {
    getPerfiles,
    getPerfilById,
    createPerfil,
    updatePerfil,
    deletePerfil
} = require('../controllers/perfilController');

const router = express.Router();

router.get('/', auth, getPerfiles);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, getPerfilById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    auth, createPerfil
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    auth, updatePerfil
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, deletePerfil
);

module.exports = router;
