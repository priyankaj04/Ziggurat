import React, { useRef, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/HeroComponent';
import About from './components/About';
import Services from './components/Services';
import Summit from './components/Summit';
import JoinUs from './components/JoinUs';
import Footer from './components/Footer';
import svg from './imgs/logo.svg';
import { motion, useScroll } from "framer-motion"

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const summitRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll();


  const scrollToComponent = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  return (
    <div className="App">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div style={{ position: 'fixed', width: '100vw', top: 20 }}>
        <a style={{ width: '90%', height: 70 }} className="codepen-button">
          <div>
            <div>
              <img src={svg} width='200px' height='200px' />
            </div>
            {window.innerWidth > 700 ?
              <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: 22 }}>
                <div className="underline-color" onClick={() => scrollToComponent(aboutRef)} style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                  About
                </div>
                <div className="underline-color" onClick={() => scrollToComponent(servicesRef)} style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                  Services
                </div>
                <div className="underline-color" onClick={() => scrollToComponent(summitRef)} style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                  Summit
                </div>
                <div className="underline-color" onClick={() => scrollToComponent(careerRef)} style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                  Carrers
                </div>
                <div className="contactus" onClick={() => scrollToComponent(contactRef)} style={{ textAlign: 'center', display: 'block', padding: 10, border: '2px solid white', marginRight: 10, borderRadius: 5 }}>
                  Contact Us
                </div>
              </div> :
              <div>
                <div style={{display:'flex', justifyContent: 'flex-end', marginRight: 10}}>
                  &#9776;
                </div>

              </div>
            }
          </div>
        </a>
      </div>
      <Hero />
      <div ref={aboutRef} >
        <About />
      </div>
      <div style={{ marginTop: 150, width: '100%', minHeight: '75vh' }} ref={servicesRef}>
        <Services />
      </div>
      <div ref={summitRef}>
        <Summit />
      </div>
      <div style={{ marginTop: 170, width: '100%', height: '75vh' }} ref={careerRef}>
        <JoinUs />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;