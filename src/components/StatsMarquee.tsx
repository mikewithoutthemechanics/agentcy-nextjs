export default function StatsMarquee() {
  return (
    <section className="relative py-12 border-y border-white/5 bg-[#0a1018]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3aafa9] mb-2">30+</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">hours saved per week</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3aafa9] mb-2">40%</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">fewer missed calls</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3aafa9] mb-2">4hrs</div>
            <div className="text-sm text-white/50 uppercase tracking-wider">to full-team onboarding</div>
          </div>
        </div>
      </div>
    </section>
  );
}