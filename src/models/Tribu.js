const mongoose = require('mongoose');

const TribusSchema = new mongoose.Schema({
    nombre: {type: String, unique: true, requiered: true},
    CreatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Tribu', TribusSchema);
