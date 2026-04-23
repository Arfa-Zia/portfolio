import Navbar from "../../../components/Navbar";
import ProjectsSection from "../../../components/ProjectsSection";
import CTA from "../../../components/CTA";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "Projects | Arfa Zia",
  description: "Explore mobile app projects by Arfa Zia.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <ProjectsSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
