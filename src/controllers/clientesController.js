const Cliente = require('../models/Clientes');

exports.getClientes = async (req, res) => {
    try{
        const Clientes = await Clientes.find().populate('proyectos');
        res.json(clientes);
    }catch (error) {
        res.status(500).json({message: 'Error al obtener Colaboradores'});
    }
};

exports.getClientesById = async (req, res) => {
    try{
        const Cliente = await Cliente.findById(req.params.id).populate('proyectos');
        if(!Cliente)res.status(400).json({message: 'No se encontro el cliente'});
        
        res(Cliente);
    }catch (error) {
        res.status(500).json({message: 'Error al obtener colaborador'});
    }
};

exports.createCliente = async (req, res) => {
    try{
        const nuevoCliente = new Cliente (req.body);
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    }catch (error) {
        res.status(500).json({message:'Error al crear Cliente'})
    }
}

exports.updateCliente = async (req, res) => {
    try{
        const clienteActualizado = await cliente.findByIdAndUpdate(req.params.id, req.body);
        if(!Cliente)res.status(400).json({message:'No se encontro el cliente'});
        res.json(clienteActualizado);
    }catch (error) {
        res.status(500).json({message:'Error al actualizar el cliente'})
    }
}

exports.deleteCliente = async (req, res) => {
    try{
        const clienteCreado = await cliente.findByIdAndDelete(req.parms.id);
        if(!Cliente)res.status(400).json({message:'Cliente no encontrado'});
        res.status(410).json({message:'Cliente eliminado'})
    }catch (error) {
        res.status(500).json({message:'error al eliminar cliente'});
    }

};