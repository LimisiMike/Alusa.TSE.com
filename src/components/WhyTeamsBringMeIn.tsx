import { AlertCircle, Zap, TrendingUp, Users, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyTeamsBringMeIn() {
  const reasons = [
    {
      title: "Technical Escalations",
      icon: <AlertCircle className="w-6 h-6 text-[#EF4444]" />,
      desc: "Resolving complex API issues and deep technical bugs that standard support tiers cannot handle."
    },
    {
      title: "Operational Bottlenecks",
      icon: <Zap className="w-6 h-6 text-[#F59E0B]" />,
      desc: "Identifying slow, manual workflows and replacing them with robust, automated systems."
    },
    {
      title: "Support Scaling",
      icon: <TrendingUp className="w-6 h-6 text-[#00C896]" />,
      desc: "Building the knowledge bases, tooling, and processes required to handle 10x ticket volume without 10x headcount."
    },
    {
      title: "Cross-Functional Communication",
      icon: <Users className="w-6 h-6 text-[#5B8CFF]" />,
      desc: "Translating customer pain into actionable engineering tickets and ensuring feedback loops are actually closed."
    },
    {
      title: "AI Workflow Automation",
      icon: <Cpu className="w-6 h-6 text-[#8B5CF6]" />,
      desc: "Designing agents and multi-step AI pipelines to classify, route, and resolve issues proactively."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">Why Teams Bring Me In</h2>
        <p className="text-[#94A3B8] text-lg">Focusing on outcomes and business value over raw ticket metrics.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-[#111827] border border-[#1F2937] p-8 rounded-2xl shadow-lg hover:border-[#5B8CFF]/50 transition-colors"
          >
            <div className="w-14 h-14 rounded-xl bg-[#1F2937] flex items-center justify-center mb-6">
              {r.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{r.title}</h3>
            <p className="text-[#94A3B8] leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
