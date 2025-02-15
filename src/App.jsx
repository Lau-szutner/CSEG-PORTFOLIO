import { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Edits from './components/edicion/Edits';
import MultiItemCarousel from './components/Fotografia/MultiItemCarousel';
import './App.css';

function App() {
  // Aquí solo defines las rutas de las imágenes dentro de public
  const images = [
    '/fotografia/fotografia-01.jpg',
    '/fotografia/fotografia-02.jpg',
    '/fotografia/fotografia-03.jpg',
    '/fotografia/fotografia-04.jpg',
    // Añadir más imágenes según sea necesario
  ];

  return (
    <>
      <Navbar />
      <Header />
      <Edits />
      <MultiItemCarousel images={images}>Fotografía</MultiItemCarousel>
    </>
  );
}

export default App;
