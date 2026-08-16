import Image from "next/image";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
    <Navbar />
      <main className="max-w-6xl mx-auto px-4 pt-20">
       <HomeSection />
        <AboutSection />
        <ProjectsSection />
      </main>
      <Footer />
        
    </>
  );
}
