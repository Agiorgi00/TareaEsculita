const express = ('express');
const { body, param } = require('express-validator');

const{
    getTribu,
    createTribu,
    updateTribu,
    deleteTribu,
    getTribus

} = require('../controllers/tribuControllers');

const router = express.router();

router.get('/', getTribus);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getTribu
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