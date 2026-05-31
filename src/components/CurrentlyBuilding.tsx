import { Hammer, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export function CurrentlyBuilding() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4 flex items-center gap-3">
          <Hammer className="w-8 h-8 text-[#5B8CFF]" />
          Currently Building
        </h2>
        <p className="text-[#94A3B8] text-lg max-w-2xl">Active projects pushing the edge of operational AI. These systems are solving complex problems using modern workflow automation.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-[#111827] to-[#1F2937]/50 border border-[#1F2937] p-8 md:p-10 rounded-3xl relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
            <Cpu className="w-32 h-32 text-white" />
          </div>
          <div className="relative z-10">
            <span className="px-3 py-1 bg-[#5B8CFF]/10 text-[#5B8CFF] border border-[#5B8CFF]/20 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-6 inline-block">In Development</span>
            <h3 className="text-2xl font-bold text-white mb-4">AI Support Operations Platform</h3>
            <p className="text-[#94A3B8] leading-relaxed text-lg">
              A centralized orchestration layer that ingests multi-channel support data, classifies urgency, and drafts technical replies using dynamic RAG over historical tickets.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-gradient-to-br from-[#111827] to-[#1F2937]/50 border border-[#1F2937] p-8 md:p-10 rounded-3xl relative overflow-hidden group shadow-2xl"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10 transform translate-x-1/4 -translate-y-1/4 group-hover:scale-110 transition-transform duration-500">
            <Cpu className="w-32 h-32 text-[#00C896]" />
          </div>
          <div className="relative z-10">
            <span className="px-3 py-1 bg-[#00C896]/10 text-[#00C896] border border-[#00C896]/20 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-6 inline-block">Active Prototype</span>
            <h3 className="text-2xl font-bold text-white mb-4">AI Lead Intelligence Engine</h3>
            <p className="text-[#94A3B8] leading-relaxed text-lg">
              Automated workflows that monitor community spaces, extract high-intent buyer signals, and generate hyper-personalized outreach drafts directly into the CRM.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
