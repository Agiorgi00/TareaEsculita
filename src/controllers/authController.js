const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');

exports.registrarUsuario = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) return res.status(400).json({ errores: errores.array() });

    const { nombre, email, password } = req.body;

    try {
        let usuario = await Usuario.findOne({ email });
        if (usuario) return res.status(400).json({ message: 'El usuario ya existe' });

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        usuario = new Usuario({ nombre, email, password: passwordHash });
        await usuario.save();

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};

exports.iniciarSesion = async (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) return res.status(400).json({ errores: errores.array() });

    const { email, password } = req.body;

    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) return res.status(400).json({ message: 'Usuario no encontrado' });

        const passwordCorrecto = await bcrypt.compare(password, usuario.password);
        if (!passwordCorrecto) return res.status(400).json({ message: 'Contraseña incorrecta' });

        const token = jwt.sign({ id: usuario._id }, process.env.JWT_SECRET, { expiresIn: '2h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
