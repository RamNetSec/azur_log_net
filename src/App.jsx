import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreMi from './components/SobreMi';
import Proyectos from './components/Proyectos';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SobreMi />
        <Proyectos />
      </main>
      <Footer />
    </>
  );
}

export default App;