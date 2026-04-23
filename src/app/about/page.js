import Navbar from "../../../components/Navbar";
import AboutSection from "../../../components/AboutSection";
import ContactForm from "../../../components/ContactForm";
import Footer from "../../../components/Footer";

export const metadata = {
  title: "About | Arfa Zia",
  description: "Learn more about Arfa Zia, a mobile app developer.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main>
        <AboutSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
