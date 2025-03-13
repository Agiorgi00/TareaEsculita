const mongoose = require('mongoose');

const PerfilSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    createdAt: { type: Date, default: Date.now } // ✅ Correcto
});

module.exports = mongoose.model('Perfil', PerfilSchema);
