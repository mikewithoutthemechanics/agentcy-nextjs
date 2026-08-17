export default function FAQ() {
  const faqs = [
    { q: 'Where in South Africa do you work?', a: 'Yes. We work remotely across South Africa. For businesses on the North Coast of KZN or the Garden Route, Western Cape, we can arrange an on-site visit when seeing the operation in person will improve the audit.' },
    { q: 'How long does a typical engagement take?', a: 'A Minimum Audit typically takes 1–2 weeks. A focused automation can go live in a few weeks; larger multi-system work is planned in clear phases so value arrives early.' },
    { q: 'Do we need technical expertise in-house?', a: 'No. We work with business owners and operating teams, not just IT departments. We handle the technical design, build and training; your team uses the system we create.' },
    { q: 'What happens after launch?', a: 'We document what was built, train your team, and stay available for support. You own the system and the data, and we agree on handover steps before implementation starts.' },
    { q: 'Is WhatsApp really that important for SA businesses?', a: 'Yes. WhatsApp is the most widely used communication platform in South Africa. Integrating it into your sales, support, and follow-up workflows means faster response times and a system your customers already prefer.' },
  ];
  return (
    <section id="FAQ-section" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">010</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">FAQs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Common <em className="text-[#3aafa9]">questions.</em></h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                <span className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#3aafa9]">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-medium">{faq.q}</span>
                </span>
                <svg className="w-5 h-5 text-white/50 group-open:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-white/60 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}