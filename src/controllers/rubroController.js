const Rubro = require('../models/Rubro');

exports.getRubros = async (req, res) => {
    try {
        const rubros = await Rubro.find();
        res.json(rubros);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los rubros' });
    }
};

exports.getRubroById = async (req, res) => {
    try {
        const rubro = await Rubro.findById(req.params.id);
        if (!rubro) return res.status(400).json({ message: 'No se pudo encontrar el rubro' });

        res.json(rubro);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener rubro' });
    }
};

exports.createRubro = async (req, res) => {
    try {
        const nuevoRubro = new Rubro(req.body);
        await nuevoRubro.save();
        res.status(201).json(nuevoRubro);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el rubro' });
    }
};

exports.updateRubro = async (req, res) => {
    try {
        const rubroActualizado = await Rubro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!rubroActualizado) return res.status(400).json({ message: 'Error al actualizar el rubro' });

        res.json(rubroActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar rubro' });
    }
};

exports.deleteRubro = async (req, res) => {
    try {
        const rubroEliminado = await Rubro.findByIdAndDelete(req.params.id);
        if (!rubroEliminado) return res.status(400).json({ message: 'Error al eliminar rubro' });

        res.json({ message: 'Rubro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar rubro' });
    }
};

