import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal, FileText, LayoutDashboard, Calendar, Mail, TrendingUp, Clock, FileType, Layers, Linkedin } from 'lucide-react';

export function CommandBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#090B10]/80 backdrop-blur-md border-b border-[#1F2937]/50 py-4' : 'bg-transparent py-6'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Terminal className="w-5 h-5 text-[#5B8CFF]" />
          <span className="font-mono font-semibold text-[#E5E7EB] tracking-tight text-lg">Operator.sys</span>
        </div>
        
        <div className="hidden md:flex items-center gap-1 p-1.5 bg-[#111827]/80 backdrop-blur-md border border-[#1F2937] rounded-xl shadow-2xl">
          {/* <a href="#resume" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#1F2937] transition-all"><FileText className="w-4 h-4" /> Resume</a> */}
          <a href="#systems" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#1F2937] transition-all"><LayoutDashboard className="w-4 h-4" /> Systems</a>
          <a href="mailto:michaellimisi7@gmail.com" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#1F2937] transition-all"><Mail className="w-4 h-4" /> Work With Me</a>
          <a href="#contact" className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#1F2937] transition-all"><Mail className="w-4 h-4" /> Contact</a>
        </div>
      </div>
    </motion.nav>
  );
}

const PRINCIPLES = [
  { cmd: "trace_reality()", txt: "Logs → APIs → Reproduction → Evidence", status: "validated" },
  { cmd: "automate()", txt: "If repeated twice → automate", status: "executed" },
  { cmd: "reduce_complexity()", txt: "Systems should simplify decisions", status: "done" },
  { cmd: "measure_impact()", txt: "Every workflow should save time or reduce risk", status: "tracked" },
];

export function OperatingSystem() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="mb-12 text-center md:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">My Operating System</h2>
        <p className="text-[#94A3B8] text-lg">How I approach messy engineering problems.</p>
      </div>

      <div className="bg-[#111827] border border-[#1F2937] rounded-3xl overflow-hidden shadow-2xl font-mono text-sm max-w-4xl mx-auto">
        <div className="flex items-center gap-2 px-6 py-4 bg-[#090B10]/50 border-b border-[#1F2937]">
          <div className="w-3.5 h-3.5 rounded-full bg-[#EF4444]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B]"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-[#10B981]"></div>
          <div className="ml-4 flex items-center gap-2 text-[#94A3B8] text-xs">
            <Terminal className="w-3.5 h-3.5" />
            operator.sh
          </div>
        </div>

        <div className="p-8 md:p-12 space-y-8 bg-gradient-to-br from-[#111827] to-[#090B10]/80">
          {PRINCIPLES.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              onMouseEnter={() => setActiveIdx(i)}
              className="group cursor-default flex flex-col md:flex-row md:items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#00C896] mt-0.5 text-base">&gt;</span>
                <div>
                  <span className="text-[#5B8CFF] font-semibold text-base">{p.cmd}</span>
                  <div className={`mt-2 text-[#94A3B8] transition-all duration-300 ${activeIdx === i ? 'opacity-100 h-auto' : 'opacity-50'}`}>
                    // {p.txt}
                  </div>
                </div>
              </div>
              <div className="md:pl-6 flex items-center gap-2 text-[#E5E7EB]">
                <span className={`transition-colors ${activeIdx === i ? 'text-[#8B5CF6]' : 'text-[#374151]'}`}>[{p.status}]</span>
              </div>
            </motion.div>
          ))}
          <div className="flex items-center gap-2 text-[#00C896] animate-pulse font-bold mt-8 text-base">
            &gt; _
          </div>
        </div>
      </div>
    </section>
  );
}

export function CapabilityMap() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const nodes = [
    { id: 'support', label: 'SUPPORT', x: 25, y: 35, desc: 'API troubleshooting • SQL • Escalations' },
    { id: 'systems', label: 'SYSTEMS', x: 25, y: 65, desc: 'Internal tools • Orchestration' },
    { id: 'ai', label: 'AI', x: 75, y: 35, desc: 'Agents • Automation workflows' },
    { id: 'operations', label: 'OPERATIONS', x: 75, y: 65, desc: 'Knowledge • Reporting • Process design' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Where I Operate</h2>
      </div>

      <div className="relative bg-[#111827] border border-[#1F2937] rounded-3xl h-[500px] flex items-center justify-center overflow-hidden">
        <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-[#1F2937] stroke-2">
           <line x1="25%" y1="35%" x2="50%" y2="50%" />
           <line x1="25%" y1="65%" x2="50%" y2="50%" />
           <line x1="75%" y1="35%" x2="50%" y2="50%" />
           <line x1="75%" y1="65%" x2="50%" y2="50%" />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[450px] h-[450px] bg-[#5B8CFF]/5 rounded-full blur-[100px] animate-pulse duration-1000"></div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="absolute z-10 w-28 h-28 rounded-full bg-[#1F2937] border border-[#5B8CFF] flex items-center justify-center shadow-[0_0_40px_rgba(91,140,255,0.2)] text-white font-bold tracking-widest text-lg backdrop-blur-md"
        >
          MIKE
        </motion.div>

        {nodes.map(node => (
          <div 
            key={node.id}
            className="absolute z-20 group"
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: 'translate(-50%, -50%)' }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div className="px-8 py-4 rounded-xl bg-[#090B10] border border-[#374151] cursor-pointer hover:border-[#00C896] transition-colors relative shadow-2xl">
               <span className="font-mono text-base text-[#E5E7EB] font-bold tracking-wider">{node.label}</span>
               
               <AnimatePresence>
                 {hoveredNode === node.id && (
                   <motion.div 
                     initial={{ opacity: 0, y: 15, scale: 0.95 }}
                     animate={{ opacity: 1, y: 0, scale: 1 }}
                     exit={{ opacity: 0, y: 10, scale: 0.95 }}
                     className="absolute top-full mt-6 left-1/2 -translate-x-1/2 w-64 bg-[#111827] border border-[#5B8CFF]/50 p-5 rounded-xl text-center pointer-events-none z-30 shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                   >
                     <p className="text-sm text-[#E5E7EB] leading-relaxed font-mono">{node.desc}</p>
                   </motion.div>
                 )}
               </AnimatePresence>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const METRICS = [
  { label: "Reduced Manual Work", val: "40%", icon: <Clock className="w-5 h-5 text-[#8B5CF6]" />, prefix: "↓" },
  { label: "Faster Decisions", val: "Triage", icon: <TrendingUp className="w-5 h-5 text-[#00C896]" />, prefix: "Auto" },
  { label: "Knowledge Reuse", val: "150%", icon: <FileType className="w-5 h-5 text-[#5B8CFF]" />, prefix: "↑" },
  { label: "Operational Scale", val: "10x", icon: <Layers className="w-5 h-5 text-[#F59E0B]" />, prefix: "×" },
];

export function BusinessImpact() {
  return (
    <section className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Business Impact</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {METRICS.map((metric, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -6 }}
            className="bg-[#111827] border border-[#1F2937] p-8 rounded-3xl relative overflow-hidden group shadow-lg"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity transform group-hover:scale-125 duration-500">
              {React.cloneElement(metric.icon, { className: 'w-24 h-24 ' + metric.icon.props.className })}
            </div>
            <div className="mt-6 flex items-baseline gap-2 relative z-10">
              {metric.prefix !== '×' && metric.prefix !== 'Auto' && <span className="text-3xl text-[#94A3B8] font-light">{metric.prefix}</span>}
              <span className="text-5xl text-white font-bold tracking-tight">{metric.val}</span>
              {metric.prefix === '×' && <span className="text-3xl text-[#94A3B8] font-light">{metric.prefix}</span>}
              {metric.prefix === 'Auto' && <span className="text-2xl text-[#94A3B8] font-light ml-2">{metric.prefix}</span>}
            </div>
            <h3 className="mt-4 text-sm font-semibold text-[#94A3B8] uppercase tracking-widest relative z-10">{metric.label}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="bg-[#111827] border border-[#1F2937] rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden text-center z-10 shadow-2xl">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#5B8CFF]/10 rounded-full blur-[120px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00C896]/10 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>
        
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8 relative z-10">
          Let’s Build Systems That Scale
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#94A3B8] md:text-lg font-mono mb-14 relative z-10">
          <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#5B8CFF]"></div>Support Operations</span>
          <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#00C896]"></div>AI Workflows</span>
          <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6]"></div>Internal Tooling</span>
          <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></div>Operational Intelligence</span>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          {/* <a href="#resume" className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-[#090B10] hover:bg-gray-200 transition-all font-bold text-lg">
            <Terminal className="w-5 h-5" />
            Resume
          </a> */}
          <a href="https://www.linkedin.com/in/michael-limisi-455678243/" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-[#111827] border border-[#374151] text-white hover:bg-[#1F2937] transition-all font-bold text-lg">
            <Linkedin className="w-5 h-5 text-[#5B8CFF]" />
            LinkedIn
          </a>
          <a href="mailto:michaellimisi7@gmail.com" className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-xl bg-[#5B8CFF] text-[#090B10] hover:bg-[#5B8CFF]/90 transition-all font-bold text-lg shadow-[0_0_30px_rgba(91,140,255,0.4)]">
            <Mail className="w-5 h-5" />
            Work With Me (Email)
          </a>
        </div>
      </div>
      
      <div className="mt-16 text-center text-xs font-mono text-[#4B5563] pb-4">
        <p>Built for impact, not just looks. © {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
