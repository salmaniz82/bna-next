import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | BNA Consulting",
  description: "Our range of accounting and consulting services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
          Our Services
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          We provide a comprehensive range of services tailored to your needs. This page is currently under construction.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="bg-white p-8 rounded-xl shadow-sm h-48 animate-pulse flex items-center justify-center">
                    <span className="text-gray-300">Service Placeholder</span>
                </div>
            ))}
        </div>
      </div>
    </main>
  );
}
