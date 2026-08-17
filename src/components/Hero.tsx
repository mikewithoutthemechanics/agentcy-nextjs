'use client';

import Link from 'next/link';

interface HeroProps {
  openBooking: () => void;
}

export default function Hero({ openBooking }: HeroProps) {
  return (
    <section id="about-section" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1018] via-[#080b10] to-[#080b10]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3aafa9]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#3aafa9] animate-pulse" />
          <span className="text-sm text-white/70">AI engineers, on-site anywhere in South Africa</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
          Intelligent Automation <br />
          <span className="text-[#3aafa9]">for Modern Teams</span>
        </h1>
        <p className="text-lg sm:text-xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
          We audit, architect, and automate the workflows, AI integrations, and custom tools that remove operational drag for good.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={openBooking} className="group inline-flex items-center gap-3 bg-[#3aafa9] text-[#071014] px-8 py-4 rounded-full text-base font-bold hover:bg-[#2d8a86] transition-all">
            <span className="flex -space-x-2">
              <img src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69af9363cde0850029360588_contact-avt.png" alt="" className="w-8 h-8 rounded-full border-2 border-[#3aafa9]" />
              <img src="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5bdfb7d8790158fcd1eb_contact-avt-1.png" alt="" className="w-8 h-8 rounded-full border-2 border-[#3aafa9]" />
            </span>
            Book a free audit
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <Link href="#service-section" className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all">
            Talk to an engineer
          </Link>
        </div>
      </div>
    </section>
  );
}