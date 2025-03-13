const express = require('express');
const { body, param } = require('express-validator');
const {
    getTribus,
    getTribuById,
    createTribu,
    updateTribu,
    deleteTribu
} = require('../controllers/tribuController');

const router = express.Router();

router.get('/', getTribus);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getTribuById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    createTribu
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    updateTribu
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    deleteTribu
);

module.exports = router;
