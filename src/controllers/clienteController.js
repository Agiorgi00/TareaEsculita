const Cliente = require('../models/Cliente');

exports.getClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find().populate('proyectos');
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener clientes' });
    }
};

exports.getClienteById = async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id).populate('proyectos');
        if (!cliente) return res.status(400).json({ message: 'No se encontró el cliente' });

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener cliente' });
    }
};

exports.createCliente = async (req, res) => {
    try {
        const nuevoCliente = new Cliente(req.body);
        await nuevoCliente.save();
        res.status(201).json(nuevoCliente);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear cliente' });
    }
};

exports.updateCliente = async (req, res) => {
    try {
        const clienteActualizado = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!clienteActualizado) return res.status(400).json({ message: 'No se encontró el cliente' });

        res.json(clienteActualizado);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el cliente' });
    }
};

exports.deleteCliente = async (req, res) => {
    try {
        const clienteEliminado = await Cliente.findByIdAndDelete(req.params.id);
        if (!clienteEliminado) return res.status(400).json({ message: 'Cliente no encontrado' });

        res.status(200).json({ message: 'Cliente eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar cliente' });
    }
};
