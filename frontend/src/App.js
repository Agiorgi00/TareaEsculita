import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Inicio from './pages/inicio';
import Colaboradores from './pages/colaboradores'; 
import Clientes from './pages/clientes';
import Proyectos from './pages/proyecto';
import Tribus from './pages/trinu';
import Perfil from './pages/perfil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/colaboradores" element={<Colaboradores />} /> {}
        <Route path="/clientes" element={<Clientes />} /> {}
        <Route path="/proyectos" element={<Proyectos />} /> {}
        <Route path="/tribus" element={<Tribus />} /> {}
        <Route path="/perfil" element={<Perfil />} /> {}
      </Routes>
    </Router>
  );
}

export default App;
