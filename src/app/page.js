import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-24 py-4">
        <HeroSection />
      </div>
      <div id="skills" className="mt-24 py-4">
        <Skills />
      </div>
      <div className="container mt-24 mx-auto py-4">
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
