import { NavBar } from "../components/NavBar";
import { HeroSection } from "../components/HeroSection";
import { StarBackground } from "@/components/StarBackground";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectSection } from "../components/ProjectSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />
      {/* NavBar*/}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
      </main>

      {/* Footer */}
    </div>
  );
};
