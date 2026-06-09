import { motion } from 'motion/react';
import { Activity, Zap, Server, Github, Linkedin, ExternalLink } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>

            {/* Status badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <StatusBadge icon={<Zap className="w-3.5 h-3.5" />} text="Automation: Active" color="#00C896" />
              <StatusBadge icon={<Server className="w-3.5 h-3.5" />} text="Systems: Healthy" color="#5B8CFF" />
              <StatusBadge icon={<Activity className="w-3.5 h-3.5" />} text="Open to Work" color="#8B5CF6" />
            </div>

            {/* Name — now front and centre */}
            <p className="text-[#5B8CFF] font-mono text-sm tracking-widest uppercase mb-3">
              Michael Alusa Limisi — Nairobi, Kenya
            </p>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
              I build AI systems that{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B8CFF] to-[#00C896] pb-2">
                think, act, and scale.
              </span>
            </h1>

            {/* Human-voice intro */}
            <p className="text-[#94A3B8] text-lg lg:text-xl leading-relaxed mb-4 max-w-xl">
              I came up through the support side of engineering — eight years of broken APIs, production incidents, and teams that needed better tools than they had.
            </p>
            <p className="text-[#94A3B8] text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
              Now I design and ship agentic AI pipelines, MCP-integrated tooling, and LLM-powered operations systems that measurably cut manual work and turn institutional knowledge into something teams can actually use.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#systems" className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-semibold text-[#090B10] bg-[#E5E7EB] hover:bg-white transition-colors shadow-lg shadow-white/5">
                View Systems
              </a>
              <a href="mailto:michaellimisi7@gmail.com" className="inline-flex items-center justify-center px-8 py-3.5 rounded-md font-semibold text-[#E5E7EB] bg-[#111827] border border-[#374151] hover:bg-[#1F2937] hover:border-[#5B8CFF]/50 transition-all shadow-lg">
                Work With Me
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/in/michael-limisi-455678243/" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#5B8CFF] transition-colors text-sm font-mono">
                <Linkedin className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://github.com/LimisiMike" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#5B8CFF] transition-colors text-sm font-mono">
                <Github className="w-4 h-4" /> GitHub
              </a>
              <a href="mailto:michaellimisi7@gmail.com" className="flex items-center gap-2 text-[#94A3B8] hover:text-[#00C896] transition-colors text-sm font-mono">
                <ExternalLink className="w-4 h-4" /> michaellimisi7@gmail.com
              </a>
            </div>

          </motion.div>
        </div>

        {/* Right: animated pipeline */}
        <div className="relative h-[600px] w-full hidden lg:block">
          <AnimatedPipeline />
        </div>
      </div>
    </section>
  );
}

function StatusBadge({ icon, text, color }: { icon: React.ReactNode; text: string; color: string }) {
  return (
    <div
      className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full border backdrop-blur-sm"
      style={{ color, borderColor: `${color}40`, backgroundColor: `${color}10` }}
    >
      <div className="relative flex items-center justify-center">{icon}</div>
      {text}
    </div>
  );
}

function AnimatedPipeline() {
  const nodes = [
    { label: 'Unstructured Data', sub: 'Chat logs · Tickets · APIs', color: '#374151' },
    { label: 'AI Analysis Layer', sub: 'Claude · OpenAI · MCP', color: '#5B8CFF', highlight: true },
    { label: 'Automation Engine', sub: 'Make.com · Python · Webhooks', color: '#374151' },
    { label: 'Business Knowledge', sub: 'Notion · CRM · Dashboards', color: '#00C896', accent: true },
  ];

  return (
    <div className="absolute inset-y-8 inset-x-8 flex flex-col justify-between items-center font-mono text-sm">
      <div className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#374151] to-transparent left-1/2 -translate-x-1/2 z-0" />

      {/* animated pulses */}
      <motion.div
        className="absolute w-1.5 h-20 bg-gradient-to-b from-transparent via-[#5B8CFF] to-transparent left-1/2 -translate-x-1/2 z-0 rounded-full blur-[1px]"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute w-1.5 h-14 bg-gradient-to-b from-transparent via-[#00C896] to-transparent left-1/2 -translate-x-1/2 z-0 rounded-full blur-[1px]"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'linear', delay: 1.4 }}
      />

      {nodes.map((node, i) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + i * 0.2 }}
          whileHover={{ scale: 1.04 }}
          className={`relative z-10 px-8 py-5 rounded-xl border shadow-2xl flex flex-col items-center justify-center min-w-[260px] backdrop-blur-md transition-colors ${
            node.highlight
              ? 'bg-[#5B8CFF]/15 border-[#5B8CFF]/50 text-[#5B8CFF]'
              : node.accent
              ? 'bg-[#00C896]/10 border-[#00C896]/40 text-[#00C896]'
              : 'bg-[#111827] border-[#1F2937] text-[#E5E7EB]'
          }`}
        >
          <span className="font-bold text-base">{node.label}</span>
          <span className="text-xs mt-1 opacity-60 tracking-wide">{node.sub}</span>
          {node.highlight && (
            <div className="absolute inset-0 rounded-xl animate-pulse bg-[#5B8CFF]/5 pointer-events-none" />
          )}
        </motion.div>
      ))}
    </div>
  );
}
