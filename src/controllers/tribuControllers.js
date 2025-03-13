const Tribu = require('../models/Tribu');

exports.getTribu = async (req, res) => {
    try{
        const tribus = await tribus.find().populate();
        res.json(tribus);
    }catch (error) {
        res.status(500).json({message:'error al obtener tribus'});
    };
};

exports.getTribus = async (req, res) => {
    try{
        const tribu = await tribu.findById().populate();
        if(!tribu)res.status(400).json({message:'no se pudo crear la tribu'});
        res.json(tribu);
    }catch (error){
        res.status(500).json({message:'error al obtener tribu'});
    };
};

exports.createTribu = async (req, res) => {
    try{
        const nuevaTribu = new Tribu(req.body);
        await nuevaTribu.save();
        res.json(nuevaTribu);
    }catch (error){
        res.status(500).json({message:'error al crear una tribu'});
    };
};

exports.updateTribu = async (req, res) => {
    try{
        const tribuActualizada = await tribuActualizada.FinByIdAndUpdate(req.params.id, req.body, {new:True});
        if(!tribuActualizada)res.status(400).json({message:'Error al actualizar la tribu'});
        res.json(tribuActualizada);
    }catch (error){
        res.status(500).json({message:'error al actualizar la tribu'});
    };
};

exports.deleteTribu = async (req, res) => {
    try{
        const tribuEliminada = await tribuEliminada.findByIdAndDelete(req.params.id, req.body);
        if(!tribuEliminada)res.status(400).json({message:'error al eliminar la tribu'});
    }catch (error){
        res.status(500).json({message:'error al eliminar la tribu'});
    };
};