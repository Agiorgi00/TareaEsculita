const Colaborador = require('../models/Colaborador');

exports.getColaboradores = async (req, res) => {
    try {
        const colaboradores = await Colaborador.find().populate('perfil proyectos');
        res.json(colaboradores);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener colaboradores' });
    }
};

exports.getColaboradorById = async (req, res) => {
    try {
        const colaborador = await Colaborador.findById(req.params.id).populate('perfil proyectos');
        if (!colaborador) return res.status(400).json({ message: 'Colaborador no encontrado' });

        res.json(colaborador);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el colaborador' });
    }
};

exports.createColaborador = async (req, res) => {
    try {
        const nuevoColaborador = new Colaborador(req.body);
        await nuevoColaborador.save();
        res.status(201).json(nuevoColaborador);
    } catch (error) {
        res.status(400).json({ message: "Error al crear colaborador" });
    }
};

exports.updateColaborador = async (req, res) => {
    try {
        const colaboradorActualizado = await Colaborador.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!colaboradorActualizado) return res.status(400).json({ message: 'Colaborador no encontrado' });

        res.json(colaboradorActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar colaborador' });
    }
};

exports.deleteColaborador = async (req, res) => {
    try {
        const colaboradorEliminado = await Colaborador.findByIdAndDelete(req.params.id);
        if (!colaboradorEliminado) return res.status(400).json({ message: 'Colaborador no encontrado' });

        res.json({ message: 'Colaborador eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar colaborador' });
    }
};
