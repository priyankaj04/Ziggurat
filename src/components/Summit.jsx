import React from 'react';
import '../App.css';
import summit from '../imgs/summit.avif';

function Summit() {
    return (
        <div style={{ display: 'flex', marginTop: 70, width: '100%', height: '75vh' }}>
            <img src={summit} style={{ flex: 1, objectFit: 'contain', width: 400, height: 500 }} />
            <div style={{ flex: 1 }}>
                <h1 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>XYZ Summit</h1>
                <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>Every year, Ziggurat organises a two-day programme of workshops, discussions, and talks for like-minded content creators. Attendees have the chance to learn more about building
                    their audience, growing their creative business, and to meet a wider community of peers.</p>
                <button className="explore-button">Get in touch</button>
            </div>
        </div>
    )
}

export default Summit;