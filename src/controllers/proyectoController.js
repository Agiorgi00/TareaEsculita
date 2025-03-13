const Proyecto = require('../models/Proyecto');

exports.getProyectos = async (req, res) => {
    try {
        const proyectos = await Proyecto.find().populate('cliente tribu colaboradores');
        res.json(proyectos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los proyectos' });
    }
};

exports.getProyectoById = async (req, res) => {
    try {
        const proyecto = await Proyecto.findById(req.params.id).populate('cliente tribu colaboradores');
        if (!proyecto) return res.status(400).json({ message: 'No se encontró el proyecto' });

        res.json(proyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el proyecto' });
    }
};

exports.createProyecto = async (req, res) => {
    try {
        const nuevoProyecto = new Proyecto(req.body);
        await nuevoProyecto.save();
        res.status(201).json(nuevoProyecto);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear el proyecto' });
    }
};

exports.updateProyecto = async (req, res) => {
    try {
        const proyectoActualizado = await Proyecto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!proyectoActualizado) return res.status(400).json({ message: 'No se encontró el proyecto para actualizar' });

        res.json(proyectoActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el proyecto' });
    }
};

exports.deleteProyecto = async (req, res) => {
    try {
        const proyectoEliminado = await Proyecto.findByIdAndDelete(req.params.id);
        if (!proyectoEliminado) return res.status(400).json({ message: 'No se encontró el proyecto para eliminar' });

        res.json({ message: 'Proyecto eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el proyecto' });
    }
};
