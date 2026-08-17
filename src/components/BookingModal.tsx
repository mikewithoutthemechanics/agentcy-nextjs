'use client';

import { useState, useEffect, useRef } from 'react';

interface BookingModalProps {
  close: () => void;
}

export default function BookingModal({ close }: BookingModalProps) {
  const [thread, setThread] = useState<{ text: string; who: 'them' | 'me' }[]>([]);
  const [choices, setChoices] = useState<React.ReactNode>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [step, setStep] = useState<string>('name');
  const threadRef = useRef<HTMLDivElement>(null);

  const cal = 'https://cal.com/michael-from-agentcy/30min?embed=true&theme=light';

  const addBubble = (text: string, who: 'them' | 'me' = 'them') => {
    setThread(prev => [...prev, { text, who }]);
    setTimeout(() => {
      if (threadRef.current) {
        threadRef.current.scrollTop = threadRef.current.scrollHeight;
      }
    }, 50);
  };

  const handleName = (name: string) => {
    if (!name.trim()) return;
    const newAnswers = { ...answers, name: name.trim() };
    setAnswers(newAnswers);
    addBubble(name.trim(), 'me');
    setStep('business');
    setChoices(
      <input
        placeholder="Business name"
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
            handleBusiness((e.target as HTMLInputElement).value.trim());
          }
        }}
        className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#3aafa9] focus:outline-none focus:ring-2 focus:ring-[#3aafa9]/30"
      />
    );
  };

  const handleBusiness = (business: string) => {
    if (!business.trim()) return;
    const newAnswers = { ...answers, business: business.trim() };
    setAnswers(newAnswers);
    addBubble(business.trim(), 'me');
    setStep('email');
    setChoices(
      <input
        type="email"
        placeholder="Business email"
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
            handleEmail((e.target as HTMLInputElement).value.trim());
          }
        }}
        className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#3aafa9] focus:outline-none focus:ring-2 focus:ring-[#3aafa9]/30"
      />
    );
  };

  const handleEmail = (email: string) => {
    if (!email.trim()) return;
    const newAnswers = { ...answers, email: email.trim() };
    setAnswers(newAnswers);
    addBubble(email.trim(), 'me');
    setStep('mode');
    setChoices(
      <div className="flex flex-col gap-3 w-full">
        <button onClick={() => handleMode('Remote audit call')} className="w-full text-left border border-white/20 bg-white/5 rounded-xl px-4 py-3 text-white hover:bg-white/10 transition-colors">
          Remote audit call
        </button>
        <button onClick={() => handleMode('Request an on-site visit')} className="w-full text-left border border-white/20 bg-white/5 rounded-xl px-4 py-3 text-white hover:bg-white/10 transition-colors">
          Request an on-site visit
        </button>
        <button onClick={() => handleMode('I\'m not sure')} className="w-full text-left border border-white/20 bg-white/5 rounded-xl px-4 py-3 text-white hover:bg-white/10 transition-colors">
          I'm not sure
        </button>
      </div>
    );
  };

  const handleMode = (mode: string) => {
    const newAnswers = { ...answers, mode };
    setAnswers(newAnswers);
    addBubble(mode, 'me');
    setStep('engagement');
    setChoices(
      <div className="flex flex-col gap-3 w-full">
        <button onClick={() => handleEngagement('Remote')} className="w-full text-left border border-white/20 bg-white/5 rounded-xl px-4 py-3 text-white hover:bg-white/10 transition-colors">
          Remote
        </button>
        <button onClick={() => handleEngagement('On-site')} className="w-full text-left border border-white/20 bg-white/5 rounded-xl px-4 py-3 text-white hover:bg-white/10 transition-colors">
          On-site
        </button>
        <button onClick={() => handleEngagement('Unsure')} className="w-full text-left border border-white/20 bg-white/5 rounded-xl px-4 py-3 text-white hover:bg-white/10 transition-colors">
          Unsure
        </button>
      </div>
    );
  };

  const handleEngagement = (engagement: string) => {
    const newAnswers = { ...answers, engagement };
    setAnswers(newAnswers);
    addBubble(engagement, 'me');
    setTimeout(() => {
      if (answers.mode === 'Request an on-site visit') {
        addBubble('Perfect. We\'ll review your on-site request for the North Coast of KZN or Garden Route, WC.');
        setChoices(
          <a
            href={`mailto:ai@agentcy.co.za?subject=${encodeURIComponent('On-site audit request — ' + answers.business)}&body=${encodeURIComponent(`Name: ${answers.name}\nBusiness: ${answers.business}\nEmail: ${answers.email}\nPreferred engagement: ${answers.engagement}\n\nPlease contact me about an on-site audit visit.`)}`}
            className="w-full inline-flex items-center justify-center gap-2 bg-[#3aafa9] text-[#071014] px-6 py-4 rounded-full font-bold hover:bg-[#2d8a86] transition-colors"
          >
            Request on-site visit →
          </a>
        );
      } else {
        addBubble('Perfect. Choose a time for your no-strings introductory audit call.');
        setChoices(
          <a
            href="https://cal.com/michael-from-agentcy/30min?embed=true&theme=light"
            target="_blank"
            rel="noopener"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#3aafa9] text-[#071014] px-6 py-4 rounded-full font-bold hover:bg-[#2d8a86] transition-colors"
          >
            Open the live booking calendar →
          </a>
        );
      }
    }, 240);
  };

  useEffect(() => {
    addBubble('Hi — I\'ll ask three quick questions, then help you choose the right next step.');
    setTimeout(() => {
      setStep('name');
      setChoices(
        <input
          placeholder="Type your name"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'Enter' && (e.target as HTMLInputElement).value.trim()) {
              handleName((e.target as HTMLInputElement).value.trim());
            }
          }}
          className="w-full bg-white border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#3aafa9] focus:outline-none focus:ring-2 focus:ring-[#3aafa9]/30"
        />
      );
    }, 500);
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [close]);

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#080b10]/80 backdrop-blur-md"
      onClick={(e) => { if (e.target === e.currentTarget) close(); }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="bookingTitle"
    >
      <div className="max-w-md mx-4 md:max-w-2xl transform overflow-hidden rounded-3xl bg-white shadow-xl relative">
        <button 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-2xl hover:bg-white/20 transition-colors"
          aria-label="Close"
          onClick={close}
        >
          ×
        </button>
        <div className="imsg-top flex items-center justify-between px-4 py-4 border-b border-white/10">
          <span></span>
          <strong className="text-white">Agentcy · Audit assistant</strong>
          <span></span>
        </div>
        <h2 id="bookingTitle" className="text-center mt-4 text-lg font-bold text-white">Let's get your audit started.</h2>
        <div 
          ref={threadRef}
          className="imsg-thread h-64 overflow-y-auto p-4 space-y-3"
        >
          {thread.map((item, index) => (
            <div key={index} className={`bubble ${item.who === 'me' ? 'self-end' : 'self-start'} max-w-[85%] px-4 py-3 rounded-2xl`}>
              <div className={item.who === 'me' 
                ? 'bg-[#3aafa9] text-white rounded-2xl rounded-tr-md' 
                : 'bg-white/10 text-white rounded-2xl rounded-tl-md'
              }>
                {item.who === 'them' && <span className="text-xs font-bold text-white/50 mb-1 block">Agentcy</span>}
                {item.text}
              </div>
            </div>
          ))}
        </div>
        <div 
          className="imsg-choices p-4 space-y-3 min-h-[60px]"
        >
          {choices}
        </div>
      </div>
    </div>
  );
}