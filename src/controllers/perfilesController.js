const Perfiles = require('../models/Perfiles');

exports.getPerfiles = async (req, res) => {
    try{
        const Pefiles = await Perfiles.find().populate('');
        res(Pefiles);
    }catch (error) {
        res.status(500).json({message:'error al obtener perfiles'});
    }
};

exports.getPerfilById = async (req, res) => {
    try{
        const perfil = await perfilById.findById();
        if(!Perfil)res.status(400).json({message:'No se encontro el perfil'});
        res(perfil);
    }catch (error) {
        res.status(500).json({message:'error al encontrar perfil'});
    }
};

exports.createPerfil = async (req, res) => {
    try{
        const nuevoPerfil = new Perfil.createPerfil(req.body);
        await nuevoPerfil.save();
        res.status(201).json(nuevoPerfil);
    }catch (error) {
        res.status(500).json({message:'error al crear perfil'})
    }
};

exports.upadtePerfil = async (req, res) => {
    try{
        const perfilActualizado = await perfilActualizado.findByIdAndEdit(req.pams.id, req.body, {new: true});
        if(!perfilActualizado)res.status(400).json({message:'no se encontro el perfil'});
        res(perfilActualizado);
    }catch (error) {  
        res.status(500).json({message:'error al actualizar perfil'})
    };
};

exports.deletePerfil = async (req, res) => {
    try{
        const perfilEliminado = await perfilEliminado.findByIdAndDelete();
        if(!perfilEliminado)res.status(400).json({message:'no se pudo eliminar el Perfil'})
        res.json({message:'Pefil eliminado correctamente'});
    }catch (error) {
        res.status(500).json({message:'error al eliminar Perfil'});
    };
    
};