const express = require('express');
const auth = require('../middleware/authMiddleware');
const { body, param } = require('express-validator');
const {
    getClientes,
    getClienteById,
    createCliente,
    updateCliente,
    deleteCliente
} = require('../controllers/clienteController');

const router = express.Router();

router.get('/', getClientes);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    getClienteById
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

module.exports = router;
