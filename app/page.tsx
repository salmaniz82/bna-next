import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
// About import removed

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <CorePillars />
      <AboutSection /> 
      <Services />
      <Footer />
    </main>
  );
}

function AboutSection() {
  return (
    <section className="py-20 container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
      <div className="md:w-1/2">
        <h2 className="font-serif text-4xl text-secondary font-bold mb-6">About Us</h2>
        <p className="text-gray-500 font-sans mb-6 leading-relaxed">
          BNA Consulting is a leading firm in London providing top-tier accounting and financial consulting services. Our dedicated team ensures that every client receives personalized attention and expert advice tailored to their specific needs.
        </p>
        <p className="text-gray-500 font-sans mb-6 leading-relaxed">
          Whether you are a startup needing company formation or an established business requiring complex VAT returns and payroll management, we have the expertise to guide you.
        </p>
        <button className="text-primary font-bold uppercase text-sm tracking-widest hover:text-secondary transition-colors">
          Read Our Full Story →
        </button>
      </div>
      <div className="md:w-1/2">
        <div className="relative h-[400px] w-full bg-gray-200 rounded-lg overflow-hidden">
          {/* Placeholder for team image */}
          <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')" }}
          ></div>
        </div>
      </div>
    </section>
  )
}
