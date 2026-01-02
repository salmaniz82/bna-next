"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    subtitle: "OUR SOLUTIONS SPEAK FOR THEMSELVES",
    title: (
      <>
        Most brilliant team <br />
        of <span className="italic font-light">Accountants</span> in London
      </>
    ),
    description:
      "We offer a vast range of services making sure it is hassle free with perfection and delivered on time.",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661377022073-0352b0cf01c1?q=80&w=870&auto=format&fit=crop",
    subtitle: "YOUR SUCCESS IS OUR REPUTATION",
    title: (
      <>
        Expert Financial <br />
        <span className="italic font-light">Advice</span> for Your Growth
      </>
    ),
    description:
      "Navigate complex financial landscapes with confidence through our tailored consulting services.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    subtitle: "DEDICATED TO YOUR BUSINESS",
    title: (
      <>
        Building Trust <br />
        through <span className="italic font-light">Transparency</span>
      </>
    ),
    description:
      "Our commitment to ethical practices and clear communication sets the foundation for your long-term success.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center text-white overflow-hidden">
      {/* Background Image Slider with Ken Burns Effect */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0.5, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('${slides[currentSlide].image}')`,
            filter: "brightness(0.4)",
          }}
        />
      </AnimatePresence>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center relative mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-yellow-500/80 tracking-[0.2em] text-sm md:text-md uppercase mb-4 font-sans font-semibold"
            >
              {slides[currentSlide].subtitle}
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-gray-200 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10"
            >
              {slides[currentSlide].description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full transition-colors font-sans font-medium group"
              >
                Let's start now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
