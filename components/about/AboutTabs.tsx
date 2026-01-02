"use client";

import { useState } from "react";
import Image from "next/image";
import { Users, FileText, Wallet } from "lucide-react";

// Since the tab content is specific and structured layout, it's safer to define it here
// rather than trying to parse it from unstructured WP HTML content.
// We can use images from the design or placeholders.

const tabsData = [
    {
        id: "expert-team",
        label: "Expert team",
        title: "Expert team",
        content: "We are an experienced and qualified English and Russian speaking executive Accounting & Consulting firm based in London.",
        image: "https://bnaconsulting.co.uk/wp-content/uploads/2019/11/shutterstock_577848541.jpg"
    },
    {
        id: "consultations",
        label: "Consultations",
        title: "Consultations",
        content: "Whether you're just looking for some advice or would like the team to take care of your accounts, best service assured.",
        image: "https://bnaconsulting.co.uk/wp-content/uploads/2018/12/tab-image2.jpg"
    },
    {
        id: "fair-pricing",
        label: "Fair pricing",
        title: "Fair pricing",
        content: "BNA Consulting offers competitive and affordable pricing based on your needs, So now you can get the best possible service at the best price.",
        image: "https://bnaconsulting.co.uk/wp-content/uploads/2019/12/shutterstock_609134795.jpg"
    }
];

export default function AboutTabs() {
    const [activeTab, setActiveTab] = useState(tabsData[0]);

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                 <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-16 max-w-6xl mx-auto">
                    <div className="md:w-1/3">
                        <h4 className="text-[#ad8f66] uppercase tracking-widest text-xs font-bold mb-2">Why Choose Us</h4>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
                            Because at <span className="text-[#ad8f66] italic">BNA CONSULTING</span>
                        </h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-gray-600 leading-relaxed text-lg">
                            We make BNA Consulting different, Our dedicated and experienced team of English and Russian speaking accountants in London have the skills to manage every area of your accounting needs, from setting up a limited company to managing annual returns, your self-assessment and even payroll for your staff.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch h-full">
                   
                   {/* Left Side: Tabs List */}
                   <div className="flex flex-col gap-4 lg:w-1/3">
                        {tabsData.map((tab) => {
                            const isActive = activeTab.id === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab)}
                                    // Added 'relative' and conditional arrow classes
                                    className={`relative text-left p-8 transition-all duration-300 border shadow-sm ${
                                        isActive
                                            ? "bg-[#ad8f66] text-white border-[#ad8f66] shadow-md z-10"
                                            : "bg-white text-gray-600 hover:bg-gray-50 border-gray-100"
                                    } 
                                    /* Angle Notch CSS */
                                    ${isActive ? "lg:after:content-[''] lg:after:absolute lg:after:top-1/2 lg:after:-right-4 lg:after:-mt-2 lg:after:border-l-[16px] lg:after:border-y-[16px] lg:after:border-l-[#ad8f66] lg:after:border-y-transparent" : ""}
                                    `}
                                >
                                    <div className="flex flex-col gap-2">
                                        <h3 className={`text-xl font-bold ${isActive ? "text-white" : "text-gray-900"}`}>
                                            {tab.title}
                                        </h3>
                                        <p className={`text-sm leading-relaxed ${isActive ? "text-white/90" : "text-gray-500"}`}>
                                            {tab.content}
                                        </p>
                                    </div>
                                </button>
                            );
                        })}
                   </div>

                   {/* Right Side: Image Display */}
                   <div className="lg:w-2/3 relative min-h-[500px] h-full">
                        {tabsData.map((tab) => (
                             <div 
                                key={tab.id}
                                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                                    activeTab.id === tab.id ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-10"
                                }`}
                             >
                                <div className="relative h-full w-full rounded-sm overflow-hidden shadow-lg">
                                    <Image
                                        src={tab.image}
                                        alt={tab.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 66vw"
                                    />
                                    {/* Overlay Gradient for better text readability if we had text over image, but here just style */}
                                    <div className="absolute inset-0 bg-black/10"></div>
                                </div>
                             </div>
                        ))}
                   </div>
                </div>
            </div>
        </section>
    );
}
