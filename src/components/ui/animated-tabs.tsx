"use client"; // @NOTE: add in case you are using Next.js

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
    { label: "About", link: "/#about" },
    { label: "Skills", link: "/#skills" },
    { label: "Projects", link: "/#projects" },
    { label: "Contact", link: "/#contact" },
];

export function AnimatedNavLinks() {
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [hoverStyles, setHoverStyles] = useState({ left: 0, width: 0, opacity: 0 });
    const containerRef = useRef<HTMLDivElement>(null);
    const hoveredLinkRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (container && hoveredLink) {
            const hoveredLinkElement = hoveredLinkRef.current;
            if (hoveredLinkElement) {
                const { offsetLeft, offsetWidth } = hoveredLinkElement;
                setHoverStyles({ left: offsetLeft, width: offsetWidth, opacity: 1 });
            }
        } else {
            setHoverStyles((prevStyles) => ({ ...prevStyles, opacity: 0 }));
        }
    }, [hoveredLink]);

    return (
        <div className="relative flex justify-center items-center w-full">
            <div ref={containerRef} className="flex md:flex-row flex-col justify-center items-center w-full">
                {NAV_LINKS.map(({ label, link }, index) => {
                    const isHovered = hoveredLink === label;
                    return (
                        <a
                            key={index}
                            ref={isHovered ? hoveredLinkRef : null}
                            href={link}
                            onMouseEnter={() => setHoveredLink(label)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <li className="block relative z-10 px-5 py-3 w-full h-full hover:text-background dark:text-muted-foreground cursor-pointer mix-blend-difference">
                            {label}
                            </li>
                        </a>
                    );
                })}
                <motion.div
                    animate={hoverStyles}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="z-0 absolute bg-foreground rounded-full h-7 md:h-12"
                />
            </div>
        </div>
    );
}
