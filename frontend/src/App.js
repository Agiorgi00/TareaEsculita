import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Inicio from './pages/inicio';
import Colaboradores from './pages/colaboradores'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/colaboradores" element={<Colaboradores />} /> {/* ✅ Agregamos la ruta */}
      </Routes>
    </Router>
  );
}

export default App;
