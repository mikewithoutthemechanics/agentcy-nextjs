export default function Process() {
  return (
    <section id="process-section" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">004</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">How we <em className="text-[#3aafa9]">work.</em></h2>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#3aafa9]/50 via-[#3aafa9]/20 to-transparent" />
          <div className="space-y-12">
            <ProcessStep number="01" title="Discovery & Audit" description="We automated quote-to-cash, dispatch, and driver coordination for a Durban logistics client." align="left" />
            <ProcessStep number="02" title="Automation Blueprint" description="We design a detailed automation architecture aligned with KPIs." align="right" />
            <ProcessStep number="03" title="Build & Integration" description="Our engineers implement AI systems and integrate with your existing tools." align="left" />
            <ProcessStep number="04" title="Testing & Optimization" description="Performance testing, data validation, refinement." align="right" />
            <ProcessStep number="05" title="Deployment & Scaling" description="Launch, monitor, and continuously optimize for growth." align="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, description, align }: { number: string; title: string; description: string; align: 'left' | 'right' }) {
  return (
    <div className={`relative flex items-center ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#3aafa9] border-4 border-[#080b10] z-10" />
      <div className={`md:w-1/2 ${align === 'right' ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3aafa9]/30 transition-colors">
          <div className="text-xs font-mono text-[#3aafa9] mb-2">{number}</div>
          <h3 className="text-xl font-bold mb-3">{title}</h3>
          <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="md:w-1/2" />
    </div>
  );
}