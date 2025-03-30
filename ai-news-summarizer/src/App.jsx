// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/news" element={<Home />} />
    </Routes>
  );
}

export default App;
