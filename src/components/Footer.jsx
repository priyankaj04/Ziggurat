import React from 'react';
import { motion } from "framer-motion"

function Footer() {
  return (
      <div style={{ display: 'flex', marginTop: 70, width: '100%', height: '75vh' }}>
          <div style={{ flex: 1 }}>
              <h1 style={{ color: '#fbbf24', fontSize: 56, textAlign: 'center' }}>Talent management for creators</h1>
              <p style={{ color: 'white', fontSize: 36, textAlign: 'center' }}>We provide talent representation and a bunch of other resources tailored to each creator’s potential, enabling them to focus on achieving their goals not just growth.</p>
              <button className="explore-button">Get in touch</button>
          </div>
      </div>
  )
}

export default Footer