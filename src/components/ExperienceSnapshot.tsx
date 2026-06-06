import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, X } from "lucide-react";

export function ExperienceSnapshot() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <section id="resume" className="max-w-7xl mx-auto px-6 w-full pt-8 pb-16">
      <div className="bg-[#111827] border border-[#1F2937] rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#5B8CFF]/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00C896]/5 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/2 translate-y-1/2"></div>

        <h2 className="text-3xl font-bold tracking-tight text-white mb-8 relative z-10">
          Experience Snapshot
        </h2>

        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div className="space-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#5B8CFF] font-mono text-sm tracking-widest uppercase mb-1">
                DOMAIN EXPERTISE
              </h3>
              <p className="text-xl text-white font-medium">
                8+ Years SaaS Support Engineering & Operations
              </p>
              <p className="text-[#94A3B8] text-lg">
                1M+ User Platform Monitoring & Technical Issue Resolution
              </p>
              <p className="text-[#94A3B8] text-lg">
                Agentic AI & Multi-Agent Systems Design and Development
              </p>
              <p className="text-[#94A3B8] text-lg">
                AI Automation, MCP Integrations & LLM Workflow Engineering
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-[#00C896] font-mono text-sm tracking-widest uppercase mt-2 mb-2">
                TECH & TOOLS
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Make.com",
                  "APIs",
                  "MCP",
                  "ChatGPT",
                  "Claude",
                  "Gemini",
                  "OpenAI API",
                  "Zendesk",
                  "Intercom",
                  "Jira",
                  "Notion",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#1F2937] border border-[#374151] rounded-xl text-sm font-medium text-[#E5E7EB]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start md:items-end">
            <button
              onClick={() => setIsResumeOpen(true)}
              className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-[#090B10] hover:bg-gray-200 transition-all font-bold text-lg shadow-xl"
            >
              <FileText className="w-5 h-5" />
              View Full Resume
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#090B10]/95 backdrop-blur-md flex items-center justify-center p-4 xl:p-8"
          >
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-6 right-6 lg:top-8 lg:right-8 bg-[#111827] hover:bg-[#1F2937] text-white p-3 rounded-full border border-[#374151] transition-colors shadow-2xl z-[102]"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-5xl h-[90vh] bg-white rounded-2xl overflow-hidden border border-[#374151] shadow-2xl relative z-[101] flex flex-col"
            >
              <div className="bg-[#111827] text-[#94A3B8] p-4 text-center border-b border-[#374151] flex justify-between items-center px-6">
                <span className="font-medium">Resume</span>
                <a
                  href="resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#5B8CFF] hover:text-[#8B5CF6] transition-colors flex items-center gap-2 text-sm font-bold"
                >
                  Open in New Tab
                </a>
              </div>
              <object
                data="resume.pdf"
                type="application/pdf"
                className="w-full flex-1"
              >
                <div className="flex flex-col items-center justify-center h-full text-center p-8 bg-[#090B10] text-[#94A3B8]">
                  <FileText className="w-16 h-16 mb-4 text-[#374151]" />
                  <p className="mb-4 text-lg">
                    Your browser might not support displaying PDFs within this
                    preview.
                  </p>
                  <a
                    href="resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#5B8CFF] text-white rounded-xl hover:bg-[#8B5CF6] transition-colors font-medium"
                  >
                    Download / View PDF
                  </a>
                </div>
              </object>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
