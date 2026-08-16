"use client"; // Required for useState interactivity in Next.js App Router
import { useState } from "react";
import { Mail, Menu, X } from 'lucide-react';
import { RiGithubFill, RiLinkedinBoxFill } from "@remixicon/react";
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex justify-around items-center p-4 bg-background text-color-font border-b border-(--border-color) fixed-top
"> 
            
            {/* 1. Brand Logo Group */}
            <div className="flex items-center gap-6 md:gap-10">
                <a href="/" className="logo font-bold text-xl hover:text-hover whitespace-nowrap">Hassaan Naveed</a>
                
                {/* 💻 LAPTOP/DESKTOP LINKS: Visible on md/lg displays, completely hidden on mobile (hidden md:flex) */}
                <ul className="hidden md:flex gap-4 md:gap-6">
                    <li className="hover:text-hover font-bold">
                        <Link href="#home">Home</Link>
                    </li>
                    <li className="hover:text-hover font-bold">
                        <Link href="#about">About</Link>
                    </li>
                    <li className="hover:text-hover font-bold">
                        <Link href="#projects">Projects</Link>
                    </li>
                </ul>
            </div>

            {/* 2. LAPTOP/DESKTOP SOCIALS: Hidden on phone viewports (hidden md:flex) */}
            <div className="socials hidden md:flex gap-4">
                <a href="mailto:hassaanonlinux@gmail.com" className="hover:text-hover">
                    <Mail />
                </a>
                <a href="https://github.com" className="hover:text-hover">
                    <RiGithubFill size={25} />
                </a>
                <a href="https://linkedin.com" className="hover:text-hover">
                    <RiLinkedinBoxFill />
                </a>
            </div>

            {/* 📱 MOBILE NAVIGATION TRIGGER: This menu icon button only appears on small screens (md:hidden) */}
            <button 
                onClick={toggleMenu} 
                className="md:hidden text-color-font hover:text-hover p-1 transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* 📱 MOBILE MENU SLIDE-DOWN DRAWER LAYOUT OVERLAY */}
            {isOpen && (
                <div className="absolute top-[100%] left-0 w-full bg-background border-b border-(--border-color) flex flex-col p-6 gap-6 md:hidden shadow-xl animate-in fade-in slide-in-from-top-5 duration-200">
                    <ul className="flex flex-col gap-4 text-center">
                        <li className="hover:text-hover font-bold text-lg" onClick={() => setIsOpen(false)}>
                            <Link href="#home">Home</Link>
                        </li>
                        <li className="hover:text-hover font-bold text-lg" onClick={() => setIsOpen(false)}>
                            <Link href="#about">About</Link>
                        </li>
                        <li className="hover:text-hover font-bold text-lg" onClick={() => setIsOpen(false)}>
                            <Link href="#projects">Projects</Link>
                        </li>
                    </ul>
                    
                    <div className="flex gap-6 justify-center items-center pt-4 border-t border-(--border-color)">
                        <a href="mailto:hassaanonlinux@gmail.com" className="hover:text-hover">
                            <Mail size={24} />
                        </a>
                        <a href="https://github.com" className="hover:text-hover">
                            <RiGithubFill size={28} />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-hover">
                            <RiLinkedinBoxFill size={24} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
