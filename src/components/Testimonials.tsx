export default function Testimonials() {
  const testimonials = [
    { name: 'Daniel Kim', role: 'Founder, ScaleLabs Education', text: 'Our enrollment process used to require manual follow-ups and spreadsheet tracking. Now, AI handles lead qualification, scheduling, reminders, and CRM updates automatically. We\'ve increased enrollment conversion by 35% in just one quarter.' },
    { name: 'Alex Johnson', role: 'Head of Operations, Finovate Consulting', text: 'Security and compliance were major concerns for us. They designed an automation architecture that was not only efficient but enterprise-grade secure.' },
    { name: 'Johan van der Merwe', role: 'Operations Manager, Coastal Logistics, Durban', text: 'Agentcy automated our dispatch and quote-to-cash process. The team stopped chasing admin and started focusing on sales. Revenue is up 25% in 90 days.' },
    { name: 'Sarah Mitchell', role: 'COO, BrightPath SaaS', text: 'We struggled with inconsistent lead follow-ups and slow response times. Their AI automation blueprint gave us clarity first, then execution. Now, our CRM runs intelligently, leads are scored automatically, and follow-ups happen without manual effort.' },
    { name: 'Jonathan Reed', role: 'Managing Director, Nexora Digital Agency', text: 'We were scaling fast but drowning in manual workflows. Their automation system connected our CRM, email marketing, and reporting into one intelligent flow. The result? 30+ hours saved per week and complete visibility across our pipeline.' },
    { name: 'Michael Tran', role: 'Founder & CEO, Skyline Realty Group', text: 'We reduced admin work by nearly 50% and doubled our qualified appointment bookings. The ROI was faster than we expected — and the system continues to scale with us.' },
  ];
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">007</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Testimonials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Trusted by <em className="text-[#3aafa9]">industry leaders.</em></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#3aafa9]/30 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#3aafa9]/20 flex items-center justify-center text-[#3aafa9] font-bold">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-sm text-white/50">{t.role}</div>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}