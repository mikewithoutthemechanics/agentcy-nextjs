export default function Values() {
  return (
    <section id="values-section" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">002</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Values</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Why Agentcy?</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We audit, architect, and automate the workflows, AI integrations, and custom tools that remove operational drag for good.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ValueCard number="01" title="On-site, anywhere in South Africa" description="We fly to you, learn your operations from the inside, and build around your reality." />
          <ValueCard number="02" title="Engineers, not salespeople" description="We audit, architect, build, integrate, train, and support your team." />
          <ValueCard number="03" title="Built for South African business" description="Resilient systems for your people, connectivity, and the way your business actually works." />
        </div>
      </div>
    </section>
  );
}

function ValueCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3aafa9]/30 transition-colors">
      <div className="text-xs font-mono text-[#3aafa9] mb-4">{number}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-white/60 leading-relaxed">{description}</p>
    </div>
  );
}