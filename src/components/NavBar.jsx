import React from 'react';
import '../App.css';
import svg from '../imgs/logo.svg';

function NavBar() {
    return (
        <div style={{position:'fixed', width: '100vw', top: 20}}>
            <a style={{ width: '90%', height: 70 }} className="codepen-button">
                <div>
                    <div>
                        <img src={svg} width='200px' height='200px' />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: 22 }}>
                        <div className="underline-color" style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                            About
                        </div>
                        <div className="underline-color" style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                            Services
                        </div>
                        <div className="underline-color" style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                            Summit
                        </div>
                        <div className="underline-color" style={{ textAlign: 'center', display: 'block', padding: 10, marginRight: 10 }}>
                            Carrers
                        </div>
                        <div className="contactus" style={{ textAlign: 'center', display: 'block', padding: 10, border: '2px solid white', marginRight: 10, borderRadius: 5 }}>
                            Contact Us
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default NavBar;