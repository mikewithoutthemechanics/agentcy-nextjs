'use client';

interface PricingProps {
  openBooking: () => void;
}

export default function Pricing({ openBooking }: PricingProps) {
  return (
    <section id="pricing-section" className="py-24 relative bg-[#0a1018]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">008</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Straightforward<br /><em className="text-[#3aafa9]">engagements.</em></h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Whether you&apos;re starting small or scaling fast, we have an automation plan that fits.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Minimum Audit"
            price="R8,000"
            period="once-off audit"
            features={['Full on-site or remote audit', 'Prioritised automation roadmap', 'SEO, AEO & conversion audit + ROI / KPI-mapped roadmap']}
            buttonText="Book a Minimum Audit"
            onButtonClick={openBooking}
          />
          <PricingCard
            title="Growth"
            price="R17,099"
            period="/ month"
            features={['Everything in Starter, plus ongoing execution', '4–6 workflow automations or AI integrations', 'Dedicated engineer contact', 'Monthly optimisation reports', 'Quarterly enhancements']}
            buttonText="Start Growing"
            popular
            onButtonClick={openBooking}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ title, price, period, features, buttonText, popular, onButtonClick }: { title: string; price: string; period: string; features: string[]; buttonText: string; popular?: boolean; onButtonClick: () => void }) {
  return (
    <div className={`bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-[#3aafa9]/30 transition-colors ${popular ? 'border-2 border-[#3aafa9] relative' : ''}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3aafa9] text-[#071014] px-4 py-1 rounded-full text-sm font-bold">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/60">Full on-site or remote audit. Built to uncover the highest-conversion, SEO and AEO opportunities before you commit.</p>
      </div>
      <div className="mb-8">
        <span className="text-5xl font-bold">{price}</span>
        <span className="text-white/50 ml-2">{period}</span>
      </div>
      <ul className="space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <svg className="w-5 h-5 text-[#3aafa9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-white/70">{feature}</span>
          </li>
        ))}
      </ul>
      <button onClick={onButtonClick} className="w-full bg-[#3aafa9] text-[#071014] py-4 rounded-full font-bold hover:bg-[#2d8a86] transition-colors">
        {buttonText}
      </button>
    </div>
  );
}