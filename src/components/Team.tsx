export default function Team() {
  const members = [
    { name: 'Michael Kidd', role: 'Managing Partner & Chief AI Architect', image: 'https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69b0dc9033646175674e6d28_logoicon.svg' },
    { name: 'Marvin Saunders', role: 'Forward-Deployed AI Systems Engineer', image: 'https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5e0ecfc53553c40c5a76_Cap%20Data%201.svg' },
    { name: 'Ryan Paul', role: 'Forward-Deployed AI UX & Frontend Engineer', image: 'https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5e0ed569da6b4b8271fd_Cap%20Data%202.svg' },
    { name: 'Nate Fish', role: 'AI Strategy & Solutions Lead', image: 'https://cdn.prod.website-files.com/69abbb96278770785e4b2dc1/69ad5e0e8ca936a8b0b6d20e_Cap%20Data%203.svg' },
  ];
  return (
    <section id="team-section" className="py-24 relative bg-[#0a1018]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-xs font-mono text-[#3aafa9]">009</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#3aafa9]" />
            <span className="text-xs uppercase tracking-widest text-white/50">Team</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet the Agentcy team</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#3aafa9]/30 transition-colors">
              <div className="aspect-square bg-white/5 relative overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-sm text-white/50">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}