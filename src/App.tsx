import { motion } from 'motion/react';
import {
  ArrowRight,
  Code2,
  Terminal,
  Workflow,
  Cpu,
  Mail,
  Linkedin,
  MessageSquare,
  ServerCrash,
  Database,
  Activity
} from 'lucide-react';

const FEATURED_PROJECT = {
  title: "AI Support Copilot",
  timeline: "2023 - Present",
  tagline: "Automating ticket categorization and knowledge extraction.",
  problem: "Support agents were spending up to 40% of their working hours manually categorizing complex technical tickets, digging through logs, and drafting repetitive responses.",
  solution: "I designed and deployed an AI-driven Support Copilot using Make.com and Model Context Protocol (MCP). It autonomously ingests Zendesk conversation logs, analyzes API payloads, categorizes the root cause, and generates drafts for missing knowledge base entries.",
  impact: [
    "Significantly reduced resolution time and improved knowledge base coverage by automating ticket analysis and documentation.",
    "Freed up senior agents to focus on high-touch enterprise escalations.",
    "Replaced manual triage with scalable AI-driven categorization."
  ],
  stack: ["Make.com", "MCP", "OpenAI API", "Zendesk API", "Python Webhooks"]
};

const OTHER_PROJECTS = [
  {
    title: "Webhook Failure Detection & Self-Diagnosis System",
    icon: <ServerCrash className="w-5 h-5" />,
    problem: "High volume of 'integration broken' tickets with zero payload context from users.",
    solution: "Engineered a request-bin middleware that intercepts failing customer webhooks and provides an actionable error UI before a ticket is even created.",
    impact: [
      "Deflected Tier 1 integration tickets by shifting diagnostic power to the user.",
      "Reduced manual investigation time for complex webhook failures."
    ],
    stack: ["Node.js", "Express", "Datadog", "AWS API Gateway"]
  },
  {
    title: "Real-Time Support Operations Intelligence Dashboard",
    icon: <Activity className="w-5 h-5" />,
    problem: "Disjointed metrics across Jira, Zendesk, and PagerDuty causing reactive rather than proactive incident response.",
    solution: "Built a unified dashboard pulling real-time SLA and bug-tracker metrics via REST APIs.",
    impact: [
      "Enabled engineering leadership to identify platform degradation trends significantly faster.",
      "Improved cross-functional visibility between support and engineering teams."
    ],
    stack: ["React", "REST APIs", "Cron Jobs", "Metabase"]
  }
];

const METHODOLOGY = [
  {
    title: "Logs Over Assumptions",
    icon: <Terminal className="w-6 h-6 text-blue-600" />,
    what: "I trace requests end-to-end and validate behavior using real system data.",
    why: "Leads to faster and more accurate issue resolution."
  },
  {
    title: "Automate the Mundane",
    icon: <Workflow className="w-6 h-6 text-blue-600" />,
    what: "If a manual process happens repeatedly, I script or build a webhook for it.",
    why: "Scales team output and reduces human error in redundant tasks."
  },
  {
    title: "Engineering Empathy",
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
    what: "I translate deeply technical backend errors into actionable human-readable steps.",
    why: "Closes the communication gap between engineers and non-technical stakeholders."
  }
];

const SERVICES = [
  {
    title: "Tier 3 Escalation Engineering",
    icon: <Database className="w-6 h-6 text-zinc-900 mb-6" />,
    description: "I dive deep into application logs, write custom SQL queries, and reproduce complex edge-cases before they hit the core engineering team.",
    impact: "Reduces escalation load and speeds up resolution time."
  },
  {
    title: "API & Integration Troubleshooting",
    icon: <Code2 className="w-6 h-6 text-zinc-900 mb-6" />,
    description: "I diagnose auth failures, rate limiting mismatches, and malformed JSON payloads across distributed SaaS infrastructure.",
    impact: "Unblocks customer integrations rapidly and restores trust."
  },
  {
    title: "Support Operations & Automation",
    icon: <Workflow className="w-6 h-6 text-zinc-900 mb-6" />,
    description: "I design and implement automation systems that connect disjointed tools via Zapier, Make.com, or custom Node.js middleware to eliminate manual data entry in workflows.",
    impact: "Cuts support workload and scales operational capacity."
  }
];

function Section({ children, className = "", id = "" }: { children: React.ReactNode, className?: string, id?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-24 sm:py-32 ${className}`}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-blue-200 selection:text-blue-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="font-mono font-semibold text-zinc-900 tracking-tight">TSE.Portfolio</span>
          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            <a href="#projects" className="hover:text-zinc-900 transition-colors">Projects</a>
            <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
            <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            Technical Support Engineer
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-6">
            I turn complex API failures and support chaos into scalable AI systems that save teams time and money.
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl mb-10">
            I help SaaS teams resolve API issues faster, reduce escalations, and build automation that cuts support workload.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-all focus:ring-4 focus:ring-zinc-200"
            >
              View My Work <ArrowRight className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-white text-zinc-900 border border-zinc-200 px-6 py-3 rounded-lg font-medium hover:bg-zinc-50 transition-all focus:ring-4 focus:ring-zinc-100"
            >
              Work With Me
            </a>
          </div>
        </motion.div>
      </section>

      {/* Featured Project */}
      <Section id="projects" className="bg-zinc-50 border-y border-zinc-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none"></div>
        <div className="mb-12 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-700 shadow-sm border border-blue-200/50">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Project</h2>
          </div>
          <p className="text-zinc-500 text-lg">Built from real-world support experience across SaaS environments.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">{FEATURED_PROJECT.title}</h3>
            <p className="text-zinc-500 font-medium mb-8 text-lg">{FEATURED_PROJECT.tagline}</p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-2">The Problem</h4>
                <p className="text-zinc-600 leading-relaxed">{FEATURED_PROJECT.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-2">The Solution</h4>
                <p className="text-zinc-600 leading-relaxed">{FEATURED_PROJECT.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-900 mb-3 flex items-center gap-2">
                  <span>🚀</span> Business Impact
                </h4>
                <p className="text-zinc-600 leading-relaxed mb-3">
                  This transforms support from a reactive function into a scalable, knowledge-driven system.
                </p>
                <ul className="text-zinc-900 font-medium leading-relaxed bg-white border border-green-200 border-l-4 border-l-green-500 p-5 rounded-r-xl shadow-sm space-y-2">
                  {FEATURED_PROJECT.impact.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-zinc-200 h-full shadow-sm">
            <div className="mb-8 border-b border-zinc-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 block">System Architecture Overview</span>
              <div className="flex flex-wrap gap-2">
                {FEATURED_PROJECT.stack.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-zinc-50 border border-zinc-200 rounded-md text-sm font-mono text-zinc-700 shadow-sm transition-colors hover:border-zinc-300 pointer-events-none">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Abstract visual representation of the system */}
            <div className="space-y-4">
              <div className="h-2 w-full bg-zinc-200 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 w-1/3"></div>
              </div>
              <div className="flex justify-between text-xs font-mono text-zinc-500">
                <span>Ingesting Webhooks...</span>
                <span>Processing AI Context</span>
              </div>
              <div className="p-4 bg-zinc-900 rounded-lg mt-6 shadow-inner text-zinc-300 font-mono text-xs overflow-x-auto">
                <pre>
{`{
  "event": "ticket_created",
  "payload": {
    "id": 89210,
    "mcp_action": "analyze_logs",
    "insights_generated": true
  }
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* CTA underneath the Featured Project */}
        <div className="mt-16 bg-white border border-zinc-200 shadow-sm rounded-2xl p-8 max-w-2xl text-center relative z-10 sm:p-10 mx-auto">
          <h4 className="text-xl font-bold text-zinc-900 mb-2">🔍 Want to see how this works?</h4>
          <p className="text-zinc-600 mb-8 max-w-md mx-auto">I can walk you through the system and how it applies to your support workflow.</p>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-medium hover:bg-blue-700 transition-all focus:ring-4 focus:ring-blue-100 shadow-sm">
            👉 Request a walkthrough
          </a>
        </div>
      </Section>

      {/* Other Projects */}
      <Section className="bg-white">
        <h2 className="text-2xl font-bold tracking-tight mb-10">More Automated Workflows</h2>
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {OTHER_PROJECTS.map((project, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -4 }}
              className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-all group flex flex-col h-full"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-zinc-700 mb-6 border border-zinc-200 shadow-sm group-hover:text-blue-600 transition-colors">
                {project.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{project.title}</h3>
              
              <div className="space-y-4 mb-8 text-sm flex-grow">
                <p><strong className="text-zinc-900 font-semibold text-xs uppercase tracking-wide block mb-1">Problem:</strong> <span className="text-zinc-600">{project.problem}</span></p>
                <p><strong className="text-zinc-900 font-semibold text-xs uppercase tracking-wide block mb-1">Solution:</strong> <span className="text-zinc-600">{project.solution}</span></p>
                <div>
                  <strong className="text-zinc-900 font-semibold text-xs uppercase tracking-wide flex items-center gap-1 mb-2 mt-4 text-blue-700">🚀 Impact:</strong>
                  <ul className="text-zinc-800 font-medium space-y-1">
                    {project.impact.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-blue-500">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-zinc-200">
                {project.stack.map(tech => (
                  <span key={tech} className="text-xs font-mono bg-white border border-zinc-200 text-zinc-600 px-2.5 py-1 rounded shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How I Think */}
      <Section className="bg-zinc-900 text-white border-y border-zinc-800">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How I Think</h2>
          <p className="text-zinc-400 max-w-2xl text-lg">My approach to troubleshooting complex SaaS environments isn't just about closing tickets; it's about solving the systemic root cause.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {METHODOLOGY.map((item, index) => (
            <div key={index} className="group">
              <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 border border-zinc-700 group-hover:border-blue-500/50 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                {item.what}
              </p>
              <p className="text-blue-400 text-sm font-medium italic flex items-center gap-2">
                <span>→</span> {item.why}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Grid */}
      <Section id="services" className="bg-zinc-50">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Where I Add Value</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -4 }}
              className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm transition-all"
            >
              {service.icon}
              <h3 className="text-lg font-bold mb-3 text-zinc-900">{service.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="pt-4 border-t border-zinc-100">
                <p className="text-sm font-medium text-emerald-700 flex items-start gap-1.5">
                  <span className="mt-0.5">→</span>
                  <span>{service.impact}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* What Happens When You Work With Me */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-12">What Happens When You Work With Me</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
              <div className="text-xl mb-3">⚡</div>
              <h4 className="font-bold text-zinc-900 mb-2">Faster Issue Resolution</h4>
              <p className="text-sm text-zinc-600">Complex API issues are debugged at the root level, skipping Tier 1 back-and-forth.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
              <div className="text-xl mb-3">📉</div>
              <h4 className="font-bold text-zinc-900 mb-2">Fewer Escalations</h4>
              <p className="text-sm text-zinc-600">Engineers get to focus on building product, not investigating repetitive support requests.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
              <div className="text-xl mb-3">🤖</div>
              <h4 className="font-bold text-zinc-900 mb-2">Reduced Manual Workload</h4>
              <p className="text-sm text-zinc-600">Redundant triage, data entry, and info-gathering are replaced with autonomous workflows.</p>
            </div>
            <div className="p-6 bg-zinc-50 rounded-xl border border-zinc-100">
              <div className="text-xl mb-3">📚</div>
              <h4 className="font-bold text-zinc-900 mb-2">Better Knowledge Systems</h4>
              <p className="text-sm text-zinc-600">Every solved ticket feeds into an auto-updating internal matrix that empowers the entire team.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* About & Contact */}
      <Section id="about" className="bg-zinc-50 border-t border-zinc-200">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">About Me</h2>
            <div className="space-y-4 text-zinc-600 leading-relaxed text-lg">
              <p>
                My career started on the frontlines of customer support. I saw firsthand how a lack of structural triage between support and engineering tanked customer satisfaction.
              </p>
              <p>
                Over the last 8 years, I evolved into a systems builder. I speak the language of highly technical engineers (SQL, API logs, backend architecture) and translate it into clear integrations and automated workflows.
              </p>
              <div className="pl-4 border-l-4 border-blue-500 mt-6 pt-1 pb-1">
                <p className="font-semibold text-zinc-900 py-1">
                  I don’t just support systems. I build systems that support teams.
                </p>
              </div>
            </div>
          </div>

          <div id="contact" className="bg-white p-10 rounded-2xl border border-zinc-200 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full translate-x-16 -translate-y-16"></div>
            <h3 className="text-2xl font-bold mb-3 relative z-10">Let's Build Better Support Systems</h3>
            <p className="text-zinc-600 mb-8 max-w-sm relative z-10">
              If your team is dealing with repeated issues, slow resolution times, or manual workflows—let’s fix that.
            </p>
            
            <div className="space-y-4 relative z-10">
              <a 
                href="michaellimisi7@gmail.com" 
                className="group flex items-center justify-between w-full p-4 rounded-xl border border-zinc-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all font-medium text-zinc-800 shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-5 h-5 group-hover:text-white text-zinc-500" />
                  Work With Me (Email)
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />
              </a>
              <a 
                href="https://www.linkedin.com/in/michael-limisi-455678243/" 
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between w-full p-4 rounded-xl border border-zinc-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all font-medium text-zinc-800 shadow-sm"
              >
                <span className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 group-hover:text-white text-zinc-500" />
                  Connect on LinkedIn
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm font-medium text-zinc-500 border-t border-zinc-200 bg-white">
        <p>Built for impact, not just looks. © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
