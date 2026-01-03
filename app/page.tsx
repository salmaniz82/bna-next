import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <CorePillars />
      <AboutSection /> 
      <Services />
    </main>
  );
}
