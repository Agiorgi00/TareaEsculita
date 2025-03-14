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

router.get('/', auth, getClientes);

router.get('/:id',
    param('id').isMongoId().withMessage('ID inválido'), auth,
    getClienteById
);

router.post('/',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    auth ,createCliente
);

router.put('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    body('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío'),
    auth, updateCliente
);

router.delete('/:id',
    param('id').isMongoId().withMessage('ID inválido'),
    auth ,deleteCliente
);

module.exports = router;
