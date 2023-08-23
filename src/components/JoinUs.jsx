import React from 'react';
import '../App.css';
import joinus from '../imgs/joinus.avif';

function JoinUs() {
    return (
        <div style={{ marginTop: 70, width: '100%', height: '75vh' }}>
            <div style={{display:'flex'}}>
                <img src={joinus} style={{ flex: 1, objectFit: 'contain', width: 400, height: 500 }} />
                <div style={{ flex: 1 }}>
                    <h1 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Join the Gang</h1>
                    <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>Ziggurat offers a unique opportunity to work in the digital entertainment industry. We are trusted advisors and
                        industry experts to our clients and the team represents our ideals of diversity and creativity.</p>
                    <button className="explore-button">Explore the Opportunity</button>
                </div>
            </div>
            <h1 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Try before you buy</h1>
            <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>How about a tele- or video-phone
                call and you can quiz us on anything you think we should know?</p>
            <button className="explore-button">Say hello</button>
        </div>
    )
}

export default JoinUs;