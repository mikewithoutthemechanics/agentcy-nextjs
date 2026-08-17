export default function Services() {
  return (
    <section id="service-section" className="py-24 relative bg-[#0a1018]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">003</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What we <em className="text-[#3aafa9]">build.</em></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            title="Workflow Automation" 
            description="We map, automate, and integrate your core workflows — from quote-to-cash to dispatch and customer follow-up." 
            features={['Workflow mapping', 'Real-time system integration.', 'Validated output']} 
            image="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5041e18e0a6c61dd1a65_Cap1.png" 
          />
          <ServiceCard 
            title="AI Integration" 
            description="We embed AI into your existing tools to draft responses, flag issues, and handle repetitive work." 
            features={['Smart response drafting', 'Automated issue flagging', 'Reduced manual overhead']} 
            image="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5041ea93e995c9064911_Cap2.png" 
          />
          <ServiceCard 
            title="Custom Tools" 
            description="Off-the-shelf software never fits perfectly. We build internal tools that solve the job exactly." 
            features={['Tailored to your workflow', 'Seamless integration', 'Scalable architecture']} 
            image="https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad504197f79fd83b9978e2_Cap3.png" 
          />
          <DataProtectionCard />
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, features, image }: { title: string; description: string; features: string[]; image: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#3aafa9]/30 transition-colors">
      <div className="aspect-video bg-white/5 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
      </div>
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-white/60 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#3aafa9] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-white/70 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DataProtectionCard() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
      <h3 className="text-2xl font-bold mb-6">Your Data. Protected. Always.</h3>
      <div className="grid grid-cols-2 gap-4">
        <DataItem title="End-to-End Encryption" />
        <DataItem title="Secure API Integrations" />
        <DataItem title="Role-Based Access Control" />
        <DataItem title="Data Minimization" />
      </div>
    </div>
  );
}

function DataItem({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5">
      <div className="w-10 h-10 rounded-lg bg-[#3aafa9]/10 flex items-center justify-center text-[#3aafa9]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm font-medium">{title}</span>
    </div>
  );
}