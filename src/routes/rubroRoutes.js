const express = require('express');
const auth = require('../middleware/authMiddleware');
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
    auth, getRubroById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    auth, createRubro
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    auth, updateRubro
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, deleteRubro
);

module.exports = router;
