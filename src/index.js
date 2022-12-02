import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.scss';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Lista from './components/Lista/Lista'
import Detalles from './components/Detalles/Detalles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='book' element={<Lista />} />
        <Route path='/book/:id' element={<Detalles />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);