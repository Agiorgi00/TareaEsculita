const mongoose = require('mongoose')
const Proyecto = require('./Proyecto')

const ClientesSchema = new mongoose.Schema({
    nombre: {type: String, require: true, unique: true},
    Proyecto: [{type: mongoose.Schema.ObjectId, ref: 'Proyecto'}],
    createdAt: {type: Date, default: Date.now}
})

module.exports = mongoose.model('Clientes', ClientesSchema);