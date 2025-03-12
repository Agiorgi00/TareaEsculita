const Colaborador = require('../models/Colaborador');
const Colaborador = require('../models/Colaborador');

exports.getColaborades = async (req, res) => {
    try{
        const Colaboradores = await Colaborador.find().populate('perfil proyectos');
        res.json(colaborades);
    }catch (error){
        res.status(500).json({message: 'error al obtener colaboradores'})
    }
    
};

exports.getColaboradorById = async (req, res) =>{
    try{
        const Colaborador = await Colaborador.findById(req.params.id).populate('perfil proyectos');
        if (!Colaborador) return res.status(400).json({message:'Colaborador no encontrdao'});
    }catch (error) {
        res.status(500).json({message:'error al obtener el coloborador'})
    }
};

exports.createColaborador = async (req, res) =>{
    try{
        const nuevoColaborador = new Colaborador (req.body);
        await nuevoColaborador.save();
        res.status(201).json({nuevoColaborador});
    }catch (error) {
        res.status(400).json[{message: "error al obtener el colaborador"}];
    }
};

exports.updateColaborador = async (req, res) =>{
    try{
        const colaboradorActualizado = await Colaborador.findById(req.params.id, req.body, { new: true });
        if (!Colaborador)res.status(400).json({message:'Colaborador no encontrado'});
        res.json(colaboradorActualizado);
    }catch (error) {
        res.status(500).json({message: 'error al actualizar colaborador'});
    } 
};

exports.eliminarColaborador = async (req, res) =>{
    try{
        const colaboradorEliminado = await Colaborador.findByIdAndDelete(req,parms,id);
        if(!Colabordaro)res.status(400).json({message:'Colaborador no encontrado'});

        res.json({message: 'Colaboradro eliminado correctamente'})
    }catch (error) {
        res.status(500).json({message: 'error al eliminar colaborador'});
    }
}