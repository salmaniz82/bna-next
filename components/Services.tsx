import Link from "next/link";
import { ArrowRight, Calculator, FileText, Briefcase, TrendingUp } from "lucide-react";

const services = [
  {
    title: "Bookkeeping",
    description: "Accurate and timely bookkeeping services to keep your finances in order.",
    icon: <Calculator size={32} />,
    link: "/services/bookkeeping"
  },
  {
    title: "Payroll Service",
    description: "Comprehensive payroll management ensuring your employees are paid on time.",
    icon: <FileText size={32} />,
    link: "/services/payroll"
  },
  {
    title: "Company Formation",
    description: "Expert assistance in setting up your new company correctly and efficiently.",
    icon: <Briefcase size={32} />,
    link: "/services/formation"
  },
  {
    title: "VAT Returns",
    description: "Hassle-free VAT return preparation and submission to HMRC.",
    icon: <TrendingUp size={32} />,
    link: "/services/vat"
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-secondary font-serif text-3xl md:text-5xl font-bold mb-4">Our Premium Services</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent hover:border-primary">
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-serif text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 font-sans text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <Link href={service.link} className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors">
                Read More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
