"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: (
       <>
        <span className="font-serif italic font-bold text-2xl md:text-3xl">English and Russian</span>
        <br />
        <span className="font-sans font-bold text-2xl md:text-3xl mt-1 block">Speaking Accountants</span>
       </>
    ),
    description:
      "Our highly trained, the bilingual team can help your business flourish with their specialised expertise in British taxes, bookkeeping and much more.",
    image: "https://bnaconsulting.co.uk/wp-content/uploads/2019/11/bilingual-1.png"
  },
  {
    title: (
        <>
         <span className="font-serif italic font-bold text-2xl md:text-3xl">Personal Account</span>
         <br />
         <span className="font-sans font-bold text-2xl md:text-3xl mt-1 block">Management</span>
        </>
     ),
    description:
      "Get a dedicated accountant to help with your personalised needs and queries, so you always feel you are in safe hands.",
    image: "https://bnaconsulting.co.uk/wp-content/uploads/2019/11/manager.png"
  },
  {
    title: (
        <>
         <span className="font-serif italic font-bold text-2xl md:text-3xl">Reliable and Flexible</span>
         <br />
         <span className="font-sans font-bold text-2xl md:text-3xl mt-1 block">Team</span>
        </>
     ),
    description:
      "Our team will work around your availability to make sure your accounts are taken care of without any hassle, so you can focus on your business.",
    image: "https://bnaconsulting.co.uk/wp-content/uploads/2019/11/group.png"
  },
];

export default function ParallaxFeatures() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Create a parallax effect where the background moves slower than the scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative h-[600px] flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{
            y,
            backgroundImage: "url('https://bnaconsulting.co.uk/wp-content/uploads/2018/12/bg-parallax2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-white">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center group px-4 gap-6 md:gap-0"
              >
                <div className="shrink-0 relative w-16 h-16 md:w-20 md:h-20 md:mb-8">
                  <Image 
                    src={feature.image} 
                    alt="" 
                    fill
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                
                <div>
                    <h3 className="mb-2 md:mb-6 leading-tight">
                    {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed">
                    {feature.description}
                    </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
