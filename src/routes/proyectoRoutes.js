const express = ('express');

const{
    getProyecto,
    createProyectoroyecto,
    deleteProyecto,
    updateProyecto,
    getProyectos

} = require('../controllers/proyectoControllers');

const router = express.router;

router.get('/', getProyecto);
router.get('/:id', getProyectos);
router.post('/', createProyectoroyecto);
router.delete('/:id', deleteProyecto);
router.put('/:id', updateProyecto);

module.exports = router;