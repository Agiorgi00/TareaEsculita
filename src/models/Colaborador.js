const mongoose = require('mongoose');

const ColaboradorSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    perfil: { type: mongoose.Schema.Types.ObjectId, ref: 'Perfil', required: true },
    proyectos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Proyecto' }], 
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Colaborador', ColaboradorSchema);
