import { fetchPageBySlug } from "@/lib/wp";
import ParallaxFeatures from "@/components/about/ParallaxFeatures";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import AboutTabs from "@/components/about/AboutTabs";
import { AnimatedImages, AnimatedContent } from "@/components/about/AnimatedIntro";

export const metadata: Metadata = {
  title: "About Us | BNA Consulting",
  description: "Learn more about BNA Consulting, our expert team, and our mission.",
};

export default async function AboutPage() {
  const page = await fetchPageBySlug("about-us");

  if (!page) {
    // Fallback content if WP page not found or API error, though ideally we handle this better
    // For now, let's just show the structure we built.
    // notFound(); 
    // Actually, let's proceed with static structure if dynamic fails, or just 404 if critical.
    // Given the task, let's assume we want to render the tabs partly.
  }

  // Extract content if available, but for About Us custom design, mostly we might rely on the specific components.
  // The WP content typically has the text "English - Russian speaking Accountants & Consultants" etc.
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero / Header Section from Design */}
      <div className="relative h-[50vh] min-h-[400px] w-full bg-[#1a1a1a] flex items-center justify-center overflow-hidden">
        {page?._embedded?.["wp:featuredmedia"]?.[0]?.source_url && (
             <>
                <Image 
                    src={page._embedded["wp:featuredmedia"][0].source_url}
                    alt="About Us"
                    fill
                    className="object-cover opacity-30"
                />
                 <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#1a1a1a]" />
             </>
        )}
       
        <div className="relative z-10 container mx-auto px-4 text-center">
             <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                About <span className="italic font-light text-[#ad8f66]">us</span>
             </h1>
              <div className="flex items-center justify-center gap-2 text-gray-400 text-sm tracking-widest uppercase">
                <span>Home</span>
                <span className="text-[#ad8f66]">•</span>
                <span className="text-white">About Us</span>
            </div>
        </div>
      </div>

        {/* Intro Section - "London Based..." */}
       <section className="py-24 container mx-auto px-4 overflow-hidden">
            <div className="text-center max-w-4xl mx-auto mb-16">
                 <h4 className="text-[#ad8f66] uppercase tracking-widest text-xs font-bold mb-4">London Based</h4>
                 <h2 className="text-3xl md:text-5xl font-bold text-[#2e2e5c] mb-8 leading-tight">
                    English – <span className="text-[#ad8f66] font-serif italic">Russian</span> speaking<br/>
                    Accountants & Consultants
                 </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 items-center max-w-6xl mx-auto">
                {/* Left Side: Images */}
                <div className="md:w-1/2 relative min-h-[500px] w-full flex items-center justify-center pl-12">
                   <AnimatedImages />
                </div>

                {/* Right Side: Content */}
                <div className="md:w-1/2">
                   <AnimatedContent />
                </div>
            </div>
       </section>

       {/* Parallax Features Section */}
       <ParallaxFeatures />

       {/* Tabbed Section */}
       <AboutTabs />
       
       {/* Call to Action */}
       <section className="py-20 bg-white text-center">
            <div className="container mx-auto px-4">
                 <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    If you can not find exactly what you are looking for, Contact Us for advice. Book your consultation now.
                 </p>
            </div>
       </section>
    </main>
  );
}
