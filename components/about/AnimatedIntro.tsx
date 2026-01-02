"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AnimatedImages() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[500px] aspect-square"
    >
      {/* Dot Pattern - Left */}
        <div 
            className="absolute -left-[60px] top-[42px] bottom-[42px] w-[150px] z-0 opacity-60 hidden md:block"
            style={{
                backgroundImage: 'url(https://bnaconsulting.co.uk/wp-content/themes/finano/assets/images/dot-banner.png)',
                backgroundPosition: 'top left',
                backgroundRepeat: 'repeat'
            }}
        />

      {/* Back Image (Man at desk) */}
      <div className="absolute right-0 top-1/2 -translate-y-[40%] w-[75%] h-[70%] z-10 rounded-lg overflow-hidden shadow-lg">
         <Image 
            src="https://bnaconsulting.co.uk/wp-content/uploads/2019/10/shutterstock_1228616686.jpg"
            alt="Consulting Background"
            fill
            className="object-cover"
         />
      </div>

      {/* Front Image (Woman working) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[70%] h-[60%] z-20 rounded-lg overflow-hidden shadow-2xl border-[5px] border-white">
        <Image 
            src="https://bnaconsulting.co.uk/wp-content/uploads/2019/12/shutterstock_609134795.jpg"
            alt="Accountant working"
            fill
            className="object-cover"
        />
      </div>
    </motion.div>
  );
}

export function AnimatedContent() {
    return (
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6 text-gray-600 leading-relaxed text-lg"
        >
            <p>
                We are English and Russian Accountants in London, with a proven track record and excellent client handling capabilities. Our company deals with all aspects of Accounting ranging from self-employed to any company type.
            </p>
            <p>
                We offer a vast range of services making sure it is hassle-free with perfection and delivered on time. Our flexible working approach can help you according to your availability and a dedicated person dealing with all your queries makes it less repetitive and understand your business needs more.
            </p>
            
            <p className="mt-8">
                At <span className="font-bold text-[#2e2e5c]">BNA CONSULTING</span> we aim to provide peace of mind with perfection in work. We can rest assure you that if you are with BNA CONSULTING your accounting matters are in safe hands.
            </p>

             <p>
                Also, the perfection in work and the peace of mind we deliver are another key point of BNA Consulting. We serve you according to your needs and flexibility.
            </p>

            <div className="pt-4 text-sm text-gray-500 italic">
                If you can not find exactly what you are looking for, <a href="/contact" className="text-[#ad8f66] underline">Contact Us</a> for advice. Book your consultation now.
            </div>
        </motion.div>
    )
}
