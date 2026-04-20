"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/95 backdrop-blur-sm py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/motin-logo-white.jpg"
                            alt="Motin Films"
                            width={140}
                            height={50}
                        />
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            href="/#portfolio"
                            className="text-white hover:text-red-500 transition-colors font-medium"
                        >
                            Portfólio
                        </Link>
                        <Link
                            href="/#solucoes"
                            className="text-white hover:text-red-500 transition-colors font-medium"
                        >
                            Soluções
                        </Link>
                        <Link
                            href="/#contato"
                            className="bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105"
                        >
                            QUERO ELEVAR O NÍVEL
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}