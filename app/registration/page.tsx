import { Metadata } from "next";
import { FileText, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Registration Forms | BNA Consulting",
  description: "Download necessary registration forms for your business.",
};

const forms = [
    { title: "New Client Registration", size: "2.4 MB" },
    { title: "VAT Registration Form", size: "1.1 MB" },
    { title: "Self Assessment Questionnaire", size: "850 KB" },
    { title: "Payroll Setup Form", size: "1.5 MB" },
];

export default function RegistrationPage() {
  return (
    <main className="min-h-screen pt-20 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Registration Forms
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Please download and complete the relevant forms below to get started with our services.
            </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {forms.map((form, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4">
                        <div className="bg-[#ad8f66]/10 p-3 rounded-lg text-[#ad8f66]">
                            <FileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800">{form.title}</h3>
                            <span className="text-xs text-gray-400">{form.size}</span>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-[#ad8f66] transition-colors">
                        <Download size={20} />
                    </button>
                </div>
            ))}
        </div>
        
        <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
                Need help filling out these forms? <a href="/contact" className="text-[#ad8f66] hover:underline font-bold">Contact our support team</a>.
            </p>
        </div>
      </div>
    </main>
  );
}
