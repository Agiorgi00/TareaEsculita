const mongoose = require('mongoose');

const RubroSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true }, // Nombre del rubro (Ej: Logística, Finanzas, Tecnología)
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rubro', RubroSchema);
