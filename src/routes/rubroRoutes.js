const express = ('express');
const { body, param } = require('express-validator');

const{
    getRubro,
    getRubros,
    createRubro,
    deleteRubro,
    updateRubro

} = require('../controllers/rubroControllers');

const router = express.router();

router.get('/', getRubros);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getRubro
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