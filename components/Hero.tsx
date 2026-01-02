import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop')",
          filter: "brightness(0.4)"
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center relative mt-10">
        <h2 className="text-yellow-500/80 tracking-[0.2em] text-sm md:text-md uppercase mb-4 font-sans font-semibold">
          Our Solutions Speak for Themselves
        </h2>
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
          Most brilliant team <br />
          of <span className="italic font-light">Accountants</span> in London
        </h1>
        <p className="text-gray-200 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10">
          We offer a vast range of services making sure it is hassle free with perfection and delivered on time.
        </p>
        
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full transition-colors font-sans font-medium group"
        >
          Let's start now 
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
