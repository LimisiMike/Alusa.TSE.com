import { motion } from 'motion/react';
import { Activity, Zap, Server } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
            <div className="flex flex-wrap gap-3 mb-8">
               <StatusBadge icon={<Zap className="w-3.5 h-3.5" />} text="Automation: Active" color="#00C896" />
               <StatusBadge icon={<Server className="w-3.5 h-3.5" />} text="Systems: Healthy" color="#5B8CFF" />
               <StatusBadge icon={<Activity className="w-3.5 h-3.5" />} text="Operations: Scaling" color="#8B5CF6" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-8">
              Build AI Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B8CFF] to-[#00C896] pb-2">Remove Operational Bottlenecks</span>
            </h1>
            
            <p className="text-[#94A3B8] text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              I design AI-powered operational systems that reduce manual work, accelerate troubleshooting, and help teams scale without adding complexity.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#systems" className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-semibold text-[#090B10] bg-[#E5E7EB] hover:bg-white transition-colors shadow-lg shadow-white/5">
                View Systems
              </a>
              <a href="mailto:michaellimisi7@gmail.com" className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-semibold text-[#E5E7EB] bg-[#111827] border border-[#374151] hover:bg-[#1F2937] hover:border-[#5B8CFF]/50 transition-all shadow-lg">
                Work With Me (Email)
              </a>
            </div>
          </motion.div>
        </div>
        
        <div className="relative h-[600px] w-full hidden lg:block">
          <AnimatedArchitecture />
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ icon, text, color }: { icon: React.ReactNode, text: string, color: string }) {
  return (
    <div 
      className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border bg-opacity-10 backdrop-blur-sm"
      style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
    >
      <div className="relative flex items-center justify-center">
        {icon}
      </div>
      {text}
    </div>
  );
}

function AnimatedArchitecture() {
  const nodes = [
    { id: 'customer', label: 'Customer', y: '0%' },
    { id: 'api', label: 'API Gateway', y: '25%' },
    { id: 'ai', label: 'AI Analysis', y: '50%', highlight: true },
    { id: 'workflow', label: 'Workflow Layer', y: '75%' },
    { id: 'action', label: 'Business Action', y: '100%' },
  ];

  return (
    <div className="absolute inset-y-8 inset-x-8 flex flex-col justify-between items-center font-mono text-sm">
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#374151] to-transparent left-1/2 -translate-x-1/2 z-0"></div>
      
      {/* Animated Pulses along the line */}
      <motion.div 
        className="absolute w-1.5 h-20 bg-gradient-to-b from-transparent via-[#5B8CFF] to-transparent left-1/2 -translate-x-1/2 z-0 rounded-full blur-[1px]"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute w-1.5 h-16 bg-gradient-to-b from-transparent via-[#00C896] to-transparent left-1/2 -translate-x-1/2 z-0 rounded-full blur-[1px]"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.25 }}
      />

      {nodes.map((node, i) => (
        <motion.div 
          key={node.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + (i * 0.2) }}
          whileHover={{ scale: 1.05, borderColor: '#5B8CFF' }}
          className={`relative z-10 px-8 py-4 rounded-xl border shadow-2xl flex items-center justify-center min-w-[240px] backdrop-blur-md transition-colors ${
            node.highlight 
              ? 'bg-[#5B8CFF]/15 border-[#5B8CFF]/50 text-[#5B8CFF] font-bold' 
              : 'bg-[#111827] border-[#1F2937] text-[#E5E7EB]'
          }`}
        >
          {node.label}
          {node.highlight && (
            <div className="absolute inset-0 rounded-xl animate-pulse bg-[#5B8CFF]/5 pointer-events-none"></div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
