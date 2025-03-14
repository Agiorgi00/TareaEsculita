const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Leer el token desde el HEADER (No desde query params)
    const token = req.header('x-auth-token');

    // Si no hay token, denegar acceso
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado. No hay token.' });
    }

    try {
        // Verificar el token con la clave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.usuario = decoded.id; // Guardar el ID del usuario en req
        next(); // Pasar al siguiente middleware/controlador
    } catch (error) {
        res.status(401).json({ message: 'Token no válido' });
    }
};
