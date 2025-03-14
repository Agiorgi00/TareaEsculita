const express = require('express');
const auth = require('../middleware/authMiddleware');
const { body, param } = require('express-validator');
const {
    getTribus,
    getTribuById,
    createTribu,
    updateTribu,
    deleteTribu
} = require('../controllers/tribuController');

const router = express.Router();

router.get('/', auth, getTribus);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, getTribuById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    auth, createTribu
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    auth, updateTribu
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth, deleteTribu
);

module.exports = router;
