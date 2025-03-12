const Proyecto = require ('../models/Proyecto')

exports.getProyectos = async (req, res) => {
    try{
        const proyectos = await proyectos.find().populate('cliente tribus colaboradores');
        res(proyectos)
    }catch (error) {
        res.status(500).json({message: 'error al encontrar los proyectos'});
    };
};

exports.getProyecto = async (req, res) => {
    try{
        const proyecto = await proyecto.findById().populate('clientes tribus colaboradores');
        if(!proyecto)res.json({message:'no se encontro el proyecto'});
        res(proyecto);
    }catch (error) {
        res.status(500).json({message:'error al encontrar el proyecto'})
    };
};

exports.createProyecto = async (req, res) => {
    try{
        const nuevoProyecto = new Proyecto(req.body);
        await nuevoProyecto.save();
        res.status(201).json(nuevoProyecto)
    }catch (error) {
        res.status(500).json({message:'error al crear proyecto'});
    }

};

exports.deleteProyecto = async (req, res) => {
    try{
        const proyectoEliminado = await proyectoEliminado.findByIdAndDelete(req.params.id);
        if(!proyectoEliminado)res.status(400).json('no se pudo eliminar el proceso');
        res.json({message:'proyecto eliminado exitosamente'});
    }catch (error) {
        res.status(500).json({message:'error al elimiar el proyecto'})
    }
};

exports.updateProyecto = async (req, res) => {
    try{
        const proyectoActualizado = await proyectoActualizado.findByIdAndUpadte(req.paras.id, req.body, {new: true});
        if(!proyectoActualizado)res.status(400).json({message:'error al actualizar el protecto'});
        res(proyectoActualizado);
    }catch (error) {
        res.status(500).json({message:'error al actualizar proyecto'});
    };
};