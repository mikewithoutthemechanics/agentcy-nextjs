export default function Integrations() {
  const tools = ['HubSpot', 'Salesforce', 'Zoho', 'Mailchimp', 'ActiveCampaign', 'Zapier', 'OpenAI', 'WhatsApp', 'Make', 'n8n'];
  return (
    <section id="integrations-section" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">006</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Integrations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Your existing tools,<br /><em className="text-[#3aafa9]">working better.</em></h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {tools.map((tool) => (
            <div key={tool} className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-[#3aafa9]/30 transition-colors min-w-[120px]">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl font-bold text-[#3aafa9]">
                {tool[0]}
              </div>
              <span className="text-sm text-white/70">{tool}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}