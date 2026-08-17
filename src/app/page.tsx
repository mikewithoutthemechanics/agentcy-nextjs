'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import StatsMarquee from '@/components/StatsMarquee';
import Values from '@/components/Values';
import Services from '@/components/Services';
import Process from '@/components/Process';
import CaseStudies from '@/components/CaseStudies';
import Integrations from '@/components/Integrations';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Trust from '@/components/Trust';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [modalOpen]);

  return (
    <div className="min-h-screen bg-[#080b10] text-[#f5f5f3]">
      <Preloader />
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} openBooking={() => setModalOpen(true)} scrolled={scrolled} />
      <Hero openBooking={() => setModalOpen(true)} />
      <StatsMarquee />
      <Values />
      <Services />
      <Process />
      <CaseStudies />
      <Integrations />
      <Pricing openBooking={() => setModalOpen(true)} />
      <Testimonials />
      <Team />
      <FAQ />
      <Trust />
      <Footer openBooking={() => setModalOpen(true)} />
      {modalOpen && <BookingModal close={() => setModalOpen(false)} />}
    </div>
  );
}

function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#080b10] flex items-center justify-center">
      <div className="text-center">
        <img 
          src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69b0dc9033646175674e6d28_logoicon.svg" 
          alt="Agentcy" 
          className="h-12 w-auto mx-auto mb-4 animate-pulse" 
        />
        <div className="text-xl font-bold tracking-tight">Agentcy</div>
      </div>
    </div>
  );
}