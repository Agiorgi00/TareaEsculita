const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB conectado'))
.catch(err => console.error('❌ Error al conectar MongoDB:', err));

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', require('./src/routes/authRoutes')); // 📌 Revisar si esta línea es el problema
app.use('/api/colaboradores', require('./src/routes/colaboradorRoutes'));
app.use('/api/clientes', require('./src/routes/clienteRoutes'));
app.use('/api/perfiles', require('./src/routes/perfilRoutes'));
app.use('/api/proyectos', require('./src/routes/proyectoRoutes'));
app.use('/api/rubros', require('./src/routes/rubroRoutes'));
app.use('/api/tribus', require('./src/routes/tribuRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`));
