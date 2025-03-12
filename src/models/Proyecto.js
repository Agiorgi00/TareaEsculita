const mongoose = require ('mongoose');

const ProyectoSchema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema)
