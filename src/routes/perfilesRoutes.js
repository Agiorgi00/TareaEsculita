const express = ('express');

const { updateColaborador } = require('../controllers/colaboradorController');
const{
    getPerfiles,
    getPerfilById,
    createPerfil,
    deletePerfil,
    upadtePerfil

} = require('../controllers/perfilesController');

const router = express.router;

router.get('/', getPerfiles);
router.get('/:id', getPerfilById);
router.post('/', createPerfil);
router.delete('/:id', deletePerfil);
router.put('/:id', upadtePerfil);

module.exports = router;