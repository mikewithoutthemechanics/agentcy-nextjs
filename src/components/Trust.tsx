export default function Trust() {
  return (
    <section className="agentcy-trust py-24 relative bg-[#0a1018]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm uppercase tracking-widest text-white/50 mb-4 block">How we work with your data</span>
            <h2 className="text-4xl font-bold mb-6">Useful systems. Clear ownership.</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              We design access around roles, use the minimum data needed for the agreed workflow, and document system ownership and operating steps for your team.
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              Before implementation, we map the data involved, the approved integrations, retention expectations and human review points. Your business remains in control of its data and accounts.
            </p>
            <a href="mailto:ai@agentcy.co.za?subject=Agentcy%20data%20and%20security%20question" className="inline-flex items-center gap-2 text-[#3aafa9] hover:underline">
              Ask a data, access or POPIA question →
            </a>
          </div>
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3aafa9]/20 to-blue-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <DataProtectionItem title="End-to-End Encryption" />
                  <DataProtectionItem title="Secure API Integrations" />
                  <DataProtectionItem title="Role-Based Access" />
                  <DataProtectionItem title="Data Minimization" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DataProtectionItem({ title }: { title: string }) {
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