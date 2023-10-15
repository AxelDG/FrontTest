import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Medicos from './Components/Medicos';
import Register from './Components/Register';
import Login from './Components/Login';

function App() {
  return (
    <BrowserRouter>
      <h1>Clinica Online</h1>
      <Routes>
        <Route path="/medicos" element={<Medicos />} />
        <Route path="/auth/register/patient" element={<Register />} />
        <Route path="/auth/login" element={<Login />} />
        {/* Otras rutas de tu aplicación */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
