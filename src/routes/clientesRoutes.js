const express = ('express');

const{
    getClientes,
    getClientesById,
    createCliente,
    updateCliente,
    deleteCliente
} = require('../controllers/clientesController');

const router = express.router();

router.get('/', getClientes);
router.get('/:id', getClientesById);
router.post('/', createCliente);
router.put('/:id', updateCliente);
router.delete('/:id', deleteCliente);

moduls.export = router;