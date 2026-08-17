export default function CaseStudies() {
  return (
    <section id="project-section" className="py-24 relative bg-[#0a1018]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">005</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Case studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Results, not <em className="text-[#3aafa9]">promises.</em></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <CaseStudyCard title="Durban Logistics Co." description="Automated dispatch and quote-to-cash process. Revenue up 25% in 90 days." metrics={['+40%', 'hours saved weekly', '+25%', 'revenue growth', '3x', 'faster response']} image="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69b279984f3e16bb9f31f77d_case2.png" />
          <CaseStudyCard title="AutoGroup" description="South African retail chain now captures every lead through WhatsApp with CRM sync and follow-ups." metrics={['+38%', 'fewer missed calls', '-62%', 'lead capture', '4x', 'admin waste']} image="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69b279984f3e16bb9f31f77d_case2.png" />
          <CaseStudyCard title="Midlands Berry Farm" description="Knowledge base and SOP automation that took a 60-person operations team from four weeks to four hours." metrics={['3x', 'to onboarding', '+40%', 'time saved', '24/7', 'faster response']} image="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69b279981413ea21427cbe4e_case3.png" />
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ title, description, metrics, image }: { title: string; description: string; metrics: string[]; image: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#3aafa9]/30 transition-colors">
      <div className="aspect-video bg-white/5 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/60 mb-6 leading-relaxed">{description}</p>
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center">
              <div className="text-lg font-bold text-[#3aafa9]">{metric}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}