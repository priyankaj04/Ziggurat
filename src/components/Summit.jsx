import React from 'react';
import '../App.css';
import summit from '../imgs/summit.avif';
import { motion } from "framer-motion"

function Summit() {
    return (
        <div className="flex flex-col justify-center md:flex-row mt-20 md:mt-28 w-full h-3/4">
            <img src={summit} className="flex-1 object-contain w-full h-auto md:w-1/2 md:h-full mt-2 p-3 md:mt-0" />
            <div className="flex-1 flex flex-col justify-center">
                <motion.h1
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 2 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-yellow-500 font-bold text-4xl p-4 md:text-6xl text-center mb-2 md:mb-0">XYZ Summit</motion.h1>
                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    transition={{ duration: 2 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-white px-6 text-2xl md:text-4xl text-center w-full md:w-3/4 mx-auto mt-2 md:mt-4">Every year, Ziggurat organises a two-day programme of workshops,
                    discussions, and talks for like-minded content creators. Attendees have the chance to learn more about building
                    their audience, growing their creative business, and to meet a wider community of peers.</motion.p>
                <button className="explore-button rounded font-bold mt-4 md:mt-8 mx-auto text-lg md:text-3xl px-4 md:px-6 py-2 md:py-3">Get in touch</button>
            </div>
        </div>
    )
}

export default Summit;