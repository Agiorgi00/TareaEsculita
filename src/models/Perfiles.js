const mongoose = require ('mongoose')

const PerfilesSchema = new mongoose.Schema({
    nombre: {type: String, unique: true, required: true},
    createdAt: {Type: Date, default: Date.now}
});

module.exports = mongoose.module ('Perfiles', PerfilesSchema);