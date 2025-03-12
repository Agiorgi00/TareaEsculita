const Rubro = require ('../models/Rubros');

exports.getRubros = async (req, res) => {
    try{
        const rubros = await rubros.find().populate();
        res.json(rubros);
    }catch (error) {
        res.status(500).json({message:'error al obtener el rubro'});
    };
};

exports.getRubro = async (req, res) => {
    try{
        const rubro = await rubro.findById().populate(req.params.id);
        if(!rubro)res.json({message:'no se pudo encontrar el rubro'});
    }catch (error){
        res.status(500).json({message:'error al obtener rubro'});
    };
};

exports.createRubro = async (req, res) => {
    try{
        const nuevoRubro = new Rubro(req.body);
        await nuevoRubro.save();
        res.status(201).json({message:'Se creo el nuevo rubro'});
    }catch (error){
        res.status(500).json({message:'error al crear el rubro'});
    };
};

exports.updateRubro = async (req, res) => {
    try{
        const rubroActualizado = await rubroActualizado.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!rubroActualizado)res.status(400).json({message:'error al actualizar el rubro'});
        res.json(rubroActualizado);
    }catch (error){
        res.status(500).json({message:'error a actualizar rubro'})
    }
};

exports.deleteRubro = async (req, res) => {
    try{
        const rubroEliminado = await rubroEliminado.findByIdAndDelete(req.params.id);
        if(!this.deleteRubro)res.json({message:'Erro al eliminar Rubro'});
        res.json({message:'Rubro eliminado'});
    }catch (error){
        res.status(500).json({message:'error al eliminar rubro'});
    };
};

