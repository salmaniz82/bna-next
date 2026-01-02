import { Award, Gem, ShieldCheck, ArrowRight } from "lucide-react";

export default function CorePillars() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 text-white">
      {/* Column 1: Our Story */}
      <div className="bg-[#6d5c3d] p-12 flex flex-col items-start min-h-[400px] border-r border-[#ffffff10]">
        <Award size={40} className="mb-6 opacity-90" />
        <h3 className="font-serif text-2xl font-bold mb-4">Our Story</h3>
        <p className="font-sans text-white/80 leading-relaxed mb-6">
          We started as with our few dedicated clients which made us and our business what we are today, that is why we deal every client with complete attention to detail and make sure to convey this message "You are important to Us"
        </p>
      </div>

      {/* Column 2: Our Approach */}
      <div className="bg-[#8c7650] p-12 flex flex-col items-start min-h-[400px] border-r border-[#ffffff10]">
        <Gem size={40} className="mb-6 opacity-90" />
        <h3 className="font-serif text-2xl font-bold mb-4">Our Approach</h3>
        <p className="font-sans text-white/80 leading-relaxed mb-6">
          It has always been "Our philosophy" and "Our vision." to grow as a company of your own and treat clients in a personalised way where they can speak their own languages like Russian and English.
        </p>
      </div>

      {/* Column 3: Our Mission */}
      <div className="bg-[#ad8f66] p-12 flex flex-col items-start min-h-[400px]">
        <ShieldCheck size={40} className="mb-6 opacity-90" />
        <h3 className="font-serif text-2xl font-bold mb-4">Our Mission</h3>
        <p className="font-sans text-white/80 leading-relaxed mb-6">
          With an expert team of English and Russian speaking accountants in London and consultants on hand for all your financial needs, our mission is to offer you peace of mind and the best service possible at a fair price.
        </p>
        <button className="mt-auto group flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-white/80 transition-colors">
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
}
