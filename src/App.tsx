import { CommandBar, OperatingSystem, CapabilityMap, BusinessImpact, Footer } from './components/Sections';
import { Hero } from './components/Hero';
import { SystemsExplorer } from './components/SystemsExplorer';
import { MissionStatement } from './components/MissionStatement';
import { ExperienceSnapshot } from './components/ExperienceSnapshot';
import { WhyTeamsBringMeIn } from './components/WhyTeamsBringMeIn';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { RequestDemo } from './components/RequestDemo';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-[#5B8CFF]/30 selection:text-[#5B8CFF] font-sans bg-[#090B10] text-[#E5E7EB]">
      <div className="fixed inset-0 bg-grid pointer-events-none z-0"></div>
      <div className="noise-overlay"></div>
      
      <CommandBar />

      <main className="relative z-10 flex flex-col gap-12 pb-32">
        <Hero />
        <MissionStatement />
        <ExperienceSnapshot />
        <WhyTeamsBringMeIn />
        
        <div className="pt-16 pb-8">
          <SystemsExplorer />
        </div>
        
        <CurrentlyBuilding />
        <RequestDemo />
        
        <OperatingSystem />
        <CapabilityMap />
        <BusinessImpact />
        <Footer />
      </main>
    </div>
  );
}

