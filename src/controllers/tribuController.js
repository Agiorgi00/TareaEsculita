const Tribu = require('../models/Tribu');

exports.getTribus = async (req, res) => {
    try {
        const tribus = await Tribu.find();
        res.json(tribus);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener tribus' });
    }
};

exports.getTribuById = async (req, res) => {
    try {
        const tribu = await Tribu.findById(req.params.id);
        if (!tribu) return res.status(400).json({ message: 'No se encontró la tribu' });

        res.json(tribu);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la tribu' });
    }
};

exports.createTribu = async (req, res) => {
    try {
        const nuevaTribu = new Tribu(req.body);
        await nuevaTribu.save();
        res.status(201).json(nuevaTribu);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear una tribu' });
    }
};

exports.updateTribu = async (req, res) => {
    try {
        const tribuActualizada = await Tribu.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!tribuActualizada) return res.status(400).json({ message: 'No se encontró la tribu para actualizar' });

        res.json(tribuActualizada);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la tribu' });
    }
};

exports.deleteTribu = async (req, res) => {
    try {
        const tribuEliminada = await Tribu.findByIdAndDelete(req.params.id);
        if (!tribuEliminada) return res.status(400).json({ message: 'No se encontró la tribu para eliminar' });

        res.json({ message: 'Tribu eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la tribu' });
    }
};
