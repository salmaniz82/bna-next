"use client";

import { Award, Gem, ShieldCheck, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CorePillars() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 text-white">
      {/* Column 1: Our Story */}
      <Pillar 
        title="Our Story" 
        icon={Award}
        bgColor="bg-[#6d5c3d]" // Darkest gold
        description="We started as with our few dedicated clients which made us and our business what we are today, that is why we deal every client with complete attention to detail and make sure to convey this message 'You are important to Us'"
      />

      {/* Column 2: Our Approach */}
      <Pillar 
        title="Our Approach" 
        icon={Gem}
        bgColor="bg-[#8c7650]" // Medium gold
        description="It has always been 'Our philosophy' and 'Our vision.' to grow as a company of your own and treat clients in a personalised way where they can speak their own languages like Russian and English."
      />

      {/* Column 3: Our Mission */}
      <Pillar 
        title="Our Mission" 
        icon={ShieldCheck}
        bgColor="bg-[#ad8f66]" // Lightest gold
        description="With an expert team of English and Russian speaking accountants in London and consultants on hand for all your financial needs, our mission is to offer you peace of mind and the best service possible at a fair price."
        hasButton
      />
    </section>
  );
}

function Pillar({ title, icon: Icon, bgColor, description, hasButton = false }: any) {
  return (
    <div className={`${bgColor} p-12 flex flex-col items-start min-h-[400px] border-r border-[#ffffff10] relative overflow-hidden group`}>
      {/* Background Icon Animation - Top Right, Fade In + Slight Zoom */}
      <Icon 
        size={180} 
        className="absolute -top-6 -right-6 text-white opacity-0 group-hover:opacity-20 transition-all duration-700 ease-out transform scale-75 group-hover:scale-100 pointer-events-none" 
      />

      <Icon size={40} className="mb-6 opacity-90 relative z-10" />
      <h3 className="font-serif text-2xl font-bold mb-4 relative z-10">{title}</h3>
      <p className="font-sans text-white/80 leading-relaxed mb-6 relative z-10">
        {description}
      </p>
      
      {hasButton && (
        <button className="mt-auto group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/80 transition-colors relative z-10">
          <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
        </button>
      )}
    </div>
  );
}
