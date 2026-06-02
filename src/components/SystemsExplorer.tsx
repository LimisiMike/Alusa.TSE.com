import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  Workflow,
  Database,
  Cpu,
  BrainCircuit,
  Maximize,
  X,
} from "lucide-react";

const SYSTEMS = [
  // {
  //   id: "01",
  //   title: "AI Technical Support Copilot",
  //   tag: "Support Operations",
  //   icon: <BrainCircuit className="w-5 h-5" />,
  //   description:
  //     "Support conversations → AI Analysis → Resolution → Knowledge Creation",
  //   stack: ["Make.com", "Python", "APIs", "MCP"],
  //   overview: {
  //     problem:
  //       "Support teams spend hours investigating repetitive issues and documenting resolutions.",
  //     outcome: [
  //       "↓ Investigation effort",
  //       "↓ Repetitive documentation",
  //       "↑ Resolution consistency",
  //       "↑ Knowledge reuse",
  //     ],
  //   },
  //   architecture: [
  //     "Zendesk",
  //     "Python",
  //     "MCP Layer",
  //     "Make.com",
  //     "Knowledge Engine",
  //   ],
  //   screenshots: ["[INSERT UI SCREENSHOT]", "[INSERT SYSTEM ARCHITECTURE]"],
  //   demo: "[INSERT 60s DEMO]",
  // },
  {
    id: "01",
    title: "Support Engineering Simulation Platform",
    tag: "AI-assisted training, issue reproduction, and resolution workflows for technical support teams.",
    icon: <Cpu className="w-5 h-5" />,
    description:
      "Simulated support environment where engineers handle tickets, reproduce issues, and learn faster.",
    stack: ["Python", "AI", "Support Logic"],
    overview: {
      problem:
        "Long ramp-up times for new engineers and inconsistent troubleshooting quality.",
      outcome: ["↓ Time to competency", "↑ Troubleshooting quality"],
    },
    architecture: [
      "Ticket",
      "Reproduction",
      "AI Guidance",
      "Customer Response",
      "Knowledge Capture",
    ],
    screenshots: ["/customer-queue.png", "/reproduction-view.png"],
    demo: "/support-simulator-demo.mp4",
  },
  {
    id: "02",
    title: "Support Logic Analyzer",
    tag: "AI System for turning unstructured support conversations into actionable technical resolution flows",
    icon: <Code2 className="w-5 h-5" />,
    description:
      "Converts complex customer issues into structured, actionable resolution workflows.",
    stack: ["AI", "Workflow Automation"],
    overview: {
      problem:
        "Support teams spend significant time interpreting unstructured tickets before any real troubleshooting begins, slowing resolution and increasing inconsistency across agents.",
      outcome: ["↓ Investigation time", "↑ Consistent troubleshooting across teams", "↓ cognitive load for support engineers"],
    },
    architecture: [
      "Customer Request",
      "Issue Extraction",
      "Root Cause",
      "Resolution",
      "Agent Actions",
    ],
    screenshots: [
      "/support-logic-input.png",
      "/support-logic-output.png",
      "/support-logic-flow.png",
    ],
    demo: "/support-logic-analyzer-demo.mp4",
  },
  {
    id: "03",
    title: "AI Lead Intelligence Engine",
    tag: "Growth Operations",
    icon: <Database className="w-5 h-5" />,
    description:
      "Automatically discovers pain signals and produces actionable outreach.",
    stack: ["FastAPI", "Make", "Airtable"],
    overview: {
      problem:
        "Manual hunting and qualification of leads is slow and inefficient.",
      outcome: ["↓ Research effort", "↑ Opportunity discovery.", "↑ Outreach effectiveness"],
    },
    architecture: [
      "Reddit",
      "Make.com",
      "FastAPI",
      "AI Analysis",
      "Make.com",
      "Airtable",
      "Email",
    ],
    screenshots: [
      "/lead-engine-airtable.png",
      "/lead-engine-email.png",
      "/lead-engine-flow.png",
    ],
    demo: "/lead-engine-demo.mp4",
  },
  {
    id: "04",
    title: "Autonomous Knowledge Builder",
    tag: "Support Intelligence",
    icon: <Workflow className="w-5 h-5" />,
    description:
      "An AI-powered pipeline where engineers paste a chat log into Claude, which automatically extracts the core problem, root cause, and resolution steps, then publishes a structured incident report directly to a Notion Knowledge Base via Make.com automation — in seconds, with no manual writing.",
    stack: ["Notion APIs", "AI Analysis", "FastAPI", "Make.com"],
    overview: {
      problem: "Engineering teams lose valuable incident knowledge in chat logs. When outages occur, the diagnosis and fix live in a Slack/Teams thread — never documented — forcing teams to re-investigate the same issues repeatedly.",
      outcome: ["↓ Repeat diagnosis time.", "  Zero documentation overhead.", "↑ Resolution consistency.", "↑ Cross-team knowledge sharing."],
    },
    architecture: [
      "Claude (MCP Client)",
      "Python (Knowledge Engine)",
      "Make.com (Orchestration)",
      "Notion(Structured KB)",
    ],
    screenshots: [
      "/knowledge-builder-flow.png", 
      "/knowledge-builder-notion.png", 
      "/knowledge-builder-output.png"],
    demo: "/knowledge-builder-demo.mp4",
  },
];
function resolvePublicAsset(assetPath: string) {
  return `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, "")}`;
}
export function SystemsExplorer() {
  const [activeSystemId, setActiveSystemId] = useState(SYSTEMS[0].id);
  const activeSystem = SYSTEMS.find((s) => s.id === activeSystemId)!;

  return (
    <section id="systems" className="max-w-7xl mx-auto px-6 w-full pt-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
          Systems I've Built
        </h2>
        <p className="text-[#94A3B8] text-lg">
          Real operational tooling inspired by real support and business
          environments.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3">
          {SYSTEMS.map((system) => (
            <button
              key={system.id}
              onClick={() => setActiveSystemId(system.id)}
              className={`text-left p-5 rounded-xl border transition-all duration-300 ${
                activeSystemId === system.id
                  ? "bg-[#111827] border-[#374151] shadow-lg shadow-[#5B8CFF]/5"
                  : "bg-transparent border-transparent hover:bg-[#111827]/50 hover:border-[#1F2937]"
              }`}
            >
              <div className="flex items-center gap-4 mb-2">
                <div
                  className={`p-2.5 rounded-lg transition-colors ${activeSystemId === system.id ? "bg-[#5B8CFF]/15 text-[#5B8CFF]" : "bg-[#1F2937] text-[#94A3B8]"}`}
                >
                  {system.icon}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#00C896] uppercase tracking-wider mb-1 opacity-90">
                    System {system.id}
                  </div>
                  <h3
                    className={`font-semibold leading-tight ${activeSystemId === system.id ? "text-white" : "text-[#E5E7EB]"}`}
                  >
                    {system.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-full lg:w-2/3">
          <SystemDetails system={activeSystem} />
        </div>
      </div>
    </section>
  );
}

function SystemDetails({ system }: { system: (typeof SYSTEMS)[0] }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const tabs = ["Overview", "Architecture", "Screenshots", "Demo"];
  const demoSrc = system.demo.startsWith("/")
    ? resolvePublicAsset(system.demo)
    : system.demo;

  return (
    <>
      <motion.div
        key={system.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-[#111827] border border-[#1F2937] rounded-3xl overflow-hidden flex flex-col h-full min-h-[600px] shadow-2xl"
      >
        <div className="p-8 border-b border-[#1F2937] bg-gradient-to-br from-[#111827] to-[#1F2937]/30">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <h2 className="text-3xl font-bold text-white">{system.title}</h2>
            <span className="text-xs font-mono bg-[#1F2937] text-[#5B8CFF] px-3 py-1.5 rounded-md border border-[#374151]">
              {system.tag}
            </span>
          </div>
          <p className="text-[#94A3B8] text-lg">{system.description}</p>
        </div>

        <div className="flex border-b border-[#1F2937] bg-[#090B10]/50 px-4 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-4 text-sm font-medium transition-all border-b-2 whitespace-nowrap ${
                activeTab === tab
                  ? "border-[#5B8CFF] text-white bg-[#111827]"
                  : "border-transparent text-[#94A3B8] hover:text-white hover:bg-[#111827]/50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="p-8 flex-grow bg-[#090B10]/20 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full"
            >
              {activeTab === "Overview" && (
                <div className="space-y-8 h-full flex flex-col">
                  <div>
                    <h4 className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">
                      Problem
                    </h4>
                    <p className="text-[#E5E7EB] bg-[#111827] border border-[#1F2937] p-5 rounded-xl leading-relaxed shadow-inner">
                      {system.overview.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">
                      Business Outcome
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {system.overview.outcome.map((out, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 bg-[#111827] border border-[#1F2937] px-5 py-4 rounded-xl text-sm text-[#E5E7EB] shadow-sm"
                        >
                          {out.startsWith("↓") ? (
                            <span className="text-[#00C896] text-lg">↓</span>
                          ) : out.startsWith("↑") ? (
                            <span className="text-[#5B8CFF] text-lg">↑</span>
                          ) : (
                            <span className="text-[#8B5CF6] text-lg">✦</span>
                          )}
                          <span>{out.substring(2) || out}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto pt-6">
                    <h4 className="text-xs font-mono text-[#94A3B8] uppercase tracking-widest mb-3">
                      Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {system.stack.map((s) => (
                        <span
                          key={s}
                          className="px-4 py-2 text-xs font-mono text-[#E5E7EB] bg-[#1F2937] rounded-md border border-[#374151]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "Architecture" && (
                <div className="h-full flex flex-col items-center justify-center py-10 w-full overflow-x-auto no-scrollbar">
                  <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-max mx-auto px-4">
                    {system.architecture.map((step, i) => (
                      <React.Fragment key={i}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-[#111827] border border-[#374151] px-5 py-4 rounded-xl text-center text-sm font-mono text-[#E5E7EB] shadow-lg whitespace-nowrap min-w-[140px]"
                        >
                          {step}
                        </motion.div>
                        {i < system.architecture.length - 1 && (
                          <div className="flex md:flex-row flex-col items-center justify-center">
                            <div className="w-0.5 h-6 md:w-6 md:h-0.5 bg-gradient-to-br md:bg-gradient-to-r from-[#374151] to-[#5B8CFF]"></div>
                            <div className="w-2 h-2 rounded-full bg-[#5B8CFF] shadow-[0_0_8px_#5B8CFF]"></div>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "Screenshots" && (
                <div className="grid md:grid-cols-2 gap-4 h-full">
                  {system.screenshots.map((s, i) => (
                    <div
                      key={i}
                      className={`flex-1 min-h-[250px] bg-[#111827] border ${s.startsWith("/") ? "border-[#374151]" : "border-[#1F2937] border-dashed"} rounded-2xl flex items-center justify-center text-[#94A3B8] font-mono text-sm overflow-hidden`}
                    >
                      {s.startsWith("/") ? (
                        <img
                          src={resolvePublicAsset(s)}
                          alt={`Screenshot ${i + 1}`}
                          className="w-full h-full object-contain object-center rounded-xl"
                        />
                      ) : (
                        s
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "Demo" && (
                <div
                  className={`h-full min-h-[300px] bg-[#111827] border ${system.demo.startsWith("/") ? "border-[#374151]" : "border-[#1F2937] border-dashed"} rounded-2xl flex flex-col items-center justify-center text-[#94A3B8] font-mono text-sm overflow-hidden group relative`}
                >
                  {system.demo.startsWith("/") ? (
                    <>
                      <video
                        src={demoSrc}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-contain object-center rounded-xl"
                      />
                      <button
                        onClick={() => setIsFullscreen(true)}
                        className="absolute top-4 right-4 bg-[#111827]/80 hover:bg-[#1F2937] text-white p-2.5 rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity border border-[#374151]"
                      >
                        <Maximize className="w-5 h-5" />
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="w-16 h-16 rounded-full bg-[#1F2937] flex items-center justify-center mb-6 cursor-pointer hover:bg-[#374151] transition-colors shadow-lg">
                        <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-[#E5E7EB] border-b-[8px] border-b-transparent ml-1"></div>
                      </div>
                      {system.demo}
                    </>
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <AnimatePresence>
        {isFullscreen && system.demo.startsWith("/") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#090B10]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 bg-[#111827] hover:bg-[#1F2937] text-white p-3 rounded-full border border-[#374151] transition-colors shadow-xl z-[101]"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-[#374151] shadow-2xl relative"
            >
              <video
                src={demoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
