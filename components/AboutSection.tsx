import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Content */}
          <div className="lg:w-3/5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                About Us
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary leading-tight">
                We are here to manage your finance with{" "}
                <span className="text-primary italic font-serif">experience</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 font-sans leading-relaxed text-sm md:text-base">
              <p>
                <strong className="text-secondary">BNA Consulting</strong> is an{" "}
                <strong className="text-secondary">English and Russian Accountant</strong> firm in London to serves you according to your needs and flexibility. This personalises approach has set us apart from others in the same industry.
              </p>
              <p>
                From the beginning, this has been our motto and the secret to success. We keep our self and our clients organised and up to date to deliver transparency of work and satisfaction.
              </p>
              <p>
                The perfection in work and the peace of mind we deliver are another key point of BNA Consulting.
              </p>
            </div>

            {/* Checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "The best service",
                "Peace of mind",
                "Competitive and fair pricing",
                "Easy availability",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <MoveRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                  <span className="font-bold text-secondary text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>

            {/* Call to Ask */}
            <div className="pt-4">
              <p className="text-secondary font-sans font-bold text-base md:text-lg mb-2">
                Call to ask <span className="underline decoration-primary underline-offset-4">any question</span>{" "}
                <a href="tel:02089919910" className="text-xl md:text-2xl ml-2 hover:text-primary transition-colors">0208 991 991 0</a>{" "}
                <span className="text-gray-400 font-normal">or</span>{" "}
                <a href="tel:07473979774" className="text-xl md:text-2xl hover:text-primary transition-colors">07473 979 774</a>
              </p>
            </div>

            {/* Signature Area */}
            <div className="pt-8 border-t border-gray-100 flex items-center gap-4">
               {/* Using the BNA logo from the site */}
               <div className="w-24 h-12 relative flex-shrink-0">
                  <Image 
                    src="https://bnaconsulting.co.uk/wp-content/uploads/2019/08/bnatp.png"
                    alt="BNA Logo"
                    fill
                    className="object-contain"
                  />
               </div>
               <div className="h-10 w-px bg-gray-200 mx-2"></div>
               <div>
                  <h4 className="font-bold text-secondary">Nina Bondarenko</h4>
                  <p className="text-xs text-gray-500 tracking-wider">AFA MIPA --- Director</p>
               </div>
            </div>
          </div>

          {/* Right Content / Image and Stats */}
          <div className="lg:w-2/5 w-full space-y-12">
            {/* Image */}
            <div className="relative h-[300px] md:h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl">
               <Image 
                src="/images/home-about.jpg"
                alt="BNA Consulting Team"
                fill
                className="object-cover"
               />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <span className="block text-3xl  font-bold text-secondary mb-2 font-google-serif">90+</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Trusted Clients</span>
              </div>
              <div>
                <span className="block text-3xl  font-bold text-secondary mb-2 font-google-serif">98%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Happy Clients</span>
              </div>
              <div>
                <span className="block text-3xl font-bold text-secondary mb-2 font-google-serif">100%</span>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
