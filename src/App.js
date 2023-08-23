import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/HeroComponent';
import About from './components/About';
import Services from './components/Services';
import Summit from './components/Summit';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Summit />
      <JoinUs />
    </div>
  );
}

export default App;