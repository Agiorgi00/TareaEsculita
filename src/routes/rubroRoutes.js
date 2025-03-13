const express = require('express');
const { body, param } = require('express-validator');
const {
    getRubros,
    getRubroById,
    createRubro,
    updateRubro,
    deleteRubro
} = require('../controllers/rubroController');

const router = express.Router();

router.get('/', getRubros);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getRubroById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    createRubro
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    updateRubro
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    deleteRubro
);

module.exports = router;
