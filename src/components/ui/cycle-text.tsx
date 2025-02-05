"use client";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';


export const words = [
    "Web Developer",
    "Software Engineer",
    "Problem Solver",
    "Full Stack Developer",
    "UI/UX Designer",
    "Tech Enthusiast",
    "Lifelong Learner",
];


export function CycleText() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1750);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-16">
            <AnimatePresence>
                <motion.div
                    key={words[currentWordIndex]}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute w-full h-full font-bold text-center text-sky-500"
                >
                    {words[currentWordIndex]}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};
