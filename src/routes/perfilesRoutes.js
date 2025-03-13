const express = ('express');
const { body, param } = require('express-validator');

const{
    getPerfiles,
    getPerfilById,
    createPerfil,
    deletePerfil,
    upadtePerfil

} = require('../controllers/perfilesController');

const router = express.router();

router.get('/', getPerfiles);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getPerfilById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    createPerfil
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    upadtePerfil
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    deletePerfil
);

module.exports = router;