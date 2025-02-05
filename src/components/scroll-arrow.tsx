"use client"

import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const ScrollArrow: React.FC = () => {
    const [showArrow, setShowArrow] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShowArrow(false);
        } else {
            setShowArrow(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {showArrow && (
            <div className="bottom-4 left-1/2 absolute text-foreground/80 transform -translate-x-1/2 animate-bounce">
                <ArrowDown />
            </div>
            )}
        </>
    );
};

export default ScrollArrow;