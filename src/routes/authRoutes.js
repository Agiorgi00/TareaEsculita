const express = require('express');
const { body } = require('express-validator');
const { registrarUsuario, iniciarSesion } = require('../controllers/authController');

const router = express.Router();

router.post('/register',
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    registrarUsuario
);

router.post('/login',
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    iniciarSesion
);

module.exports = router;

