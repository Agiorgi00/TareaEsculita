const express = ('express');
const { body , param } = require('express-validator');

const{
    getClientes,
    getClientesById,
    createCliente,
    updateCliente,
    deleteCliente
} = require('../controllers/clientesController');

const router = express.router();


router.get('/', getClientes);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getClientesById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    createCliente
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    updateCliente
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    deleteCliente
);


moduls.export = router;