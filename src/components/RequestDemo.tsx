import { Play } from 'lucide-react';

export function RequestDemo() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full pt-20 mt-8 mb-8">
      <div className="bg-gradient-to-r from-[#5B8CFF] to-[#8B5CF6] rounded-[2.5rem] p-1 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#5B8CFF] to-[#8B5CF6] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-1000"></div>
        <div className="bg-[#090B10] rounded-[2.4rem] p-12 md:p-20 text-center relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5B8CFF]/10 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Want to see these systems in action?</h2>
          <p className="text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            I can walk you through the architecture, implementation decisions, and business outcomes.
          </p>
          <a 
            href="mailto:michaellimisi7@gmail.com?subject=Requesting%20a%20Demo" 
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-[#090B10] hover:bg-gray-200 transition-all font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] hover:-translate-y-1"
          >
            <Play className="w-6 h-6 fill-current" />
            Request a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
