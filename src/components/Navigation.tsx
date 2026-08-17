'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  openBooking: () => void;
}

export default function Navigation({ openBooking }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#080b10]/90 backdrop-blur-md border-b border-white/10' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <img src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69b0dc9033646175674e6d28_logoicon.svg" alt="Agentcy" className="h-8 w-auto" />
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about-section" className="text-sm text-white/70 hover:text-white transition-colors">About</Link>
            <Link href="#service-section" className="text-sm text-white/70 hover:text-white transition-colors">Services</Link>
            <Link href="#project-section" className="text-sm text-white/70 hover:text-white transition-colors">Projects</Link>
            <Link href="#pricing-section" className="text-sm text-white/70 hover:text-white transition-colors">Pricing</Link>
            <Link href="#FAQ-section" className="text-sm text-white/70 hover:text-white transition-colors">FAQs</Link>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={openBooking} className="hidden md:inline-flex items-center gap-2 bg-[#3aafa9] text-[#071014] px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#2d8a86] transition-colors">
              <span className="flex -space-x-2">
                <img src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69af9363cde0850029360588_contact-avt.png" alt="" className="w-6 h-6 rounded-full border-2 border-[#3aafa9]" />
                <img src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5bdfb7d8790158fcd1eb_contact-avt-1.png" alt="" className="w-6 h-6 rounded-full border-2 border-[#3aafa9]" />
              </span>
              Book a free audit
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#080b10]/95 backdrop-blur-md border-b border-white/10">
          <div className="px-4 py-4 space-y-3">
            <Link href="#about-section" className="block text-white/70 hover:text-white py-2" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="#service-section" className="block text-white/70 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Services</Link>
            <Link href="#project-section" className="block text-white/70 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="#pricing-section" className="block text-white/70 hover:text-white py-2" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link href="#FAQ-section" className="block text-white/70 hover:text-white py-2" onClick={() => setMenuOpen(false)}>FAQs</Link>
            <button onClick={openBooking} className="w-full bg-[#3aafa9] text-[#071014] px-5 py-3 rounded-full text-sm font-bold mt-4">
              Book a free audit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}