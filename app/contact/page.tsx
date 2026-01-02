import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | BNA Consulting",
  description: "Get in touch with us for your accounting needs.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
          Contact Us
        </h1>
        <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto">
          We are currently building this page. Please use the contact details in the footer to reach us.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-4 text-[#ad8f66]">Contact Details</h3>
            <p className="mb-2"><strong>Phone:</strong> 0208 991 991 0</p>
            <p><strong>Email:</strong> info@bnaconsulting.co.uk</p>
        </div>
      </div>
    </main>
  );
}
