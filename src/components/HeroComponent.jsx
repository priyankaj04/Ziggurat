import React from 'react';
import '../App.css';
import { motion } from "framer-motion"
import heroimg from '../imgs/ziggurat-03-m.webp'

function HeroComponent() {
    return (
        <div className="flex flex-col justify-center md:flex-row mt-24 md:mt-36 w-full h-3/5">
            <div className="flex-1 flex flex-col justify-center">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 2 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-yellow-500 font-bold text-4xl p-4 md:text-6xl text-center mb-2 md:mb-0"
                >
                    Welcome to Ziggurat XYZ
                </motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 2 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white px-6 text-2xl md:text-4xl text-center w-full md:w-3/4 mx-auto mt-2 md:mt-4"
                >
                    We’re a zealous gang of specialists quietly helping creators, whatever their size, make their millions.
                </motion.p>
                <button className="explore-button rounded font-bold mt-4 md:mt-8 mx-auto text-lg md:text-3xl px-4 md:px-6 py-2 md:py-3">
                    Explore the Ziggurat
                </button>
            </div>
            <img src={heroimg} className="flex-1 object-cover w-full h-auto md:w-1/2 md:h-full mt-2 md:mt-0" />
        </div>
    )
}

export default HeroComponent;