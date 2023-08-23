import React from 'react';
import '../App.css';
import heroimg from '../imgs/ziggurat-03-m.webp'

function HeroComponent() {
    return (
        <div style={{ display: 'flex', marginTop: 170, width: '100%', height: '75vh' }}>
            <div style={{ flex: 1 }}>
                <h1 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Welcome to Ziggurat XYZ</h1>
                <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>We’re a zealous gang of specialists quietly helping creators, whatever their size, make their millions.</p>
                <button className="explore-button">Explore the Ziggurat</button>
            </div>
            <img src={heroimg} style={{ flex: 1, objectFit: 'cover', width: 400, height: 500 }} />
        </div>
    )
}

export default HeroComponent;