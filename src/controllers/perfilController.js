const Perfil = require('../models/Perfil');

exports.getPerfiles = async (req, res) => {
    try {
        const perfiles = await Perfil.find();
        res.json(perfiles);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener perfiles' });
    }
};

exports.getPerfilById = async (req, res) => {
    try {
        const perfil = await Perfil.findById(req.params.id);
        if (!perfil) return res.status(400).json({ message: 'No se encontró el perfil' });

        res.json(perfil);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener perfil' });
    }
};

exports.createPerfil = async (req, res) => {
    try {
        const nuevoPerfil = new Perfil(req.body);
        await nuevoPerfil.save();
        res.status(201).json(nuevoPerfil);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear perfil' });
    }
};

exports.updatePerfil = async (req, res) => {
    try {
        const perfilActualizado = await Perfil.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!perfilActualizado) return res.status(400).json({ message: 'No se encontró el perfil' });

        res.json(perfilActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar perfil' });
    }
};

exports.deletePerfil = async (req, res) => {
    try {
        const perfilEliminado = await Perfil.findByIdAndDelete(req.params.id);
        if (!perfilEliminado) return res.status(400).json({ message: 'No se pudo eliminar el perfil' });

        res.json({ message: 'Perfil eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar perfil' });
    }
};
