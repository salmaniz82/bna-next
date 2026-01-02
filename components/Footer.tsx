import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-6">
            <div className="relative w-48 h-16">
                 <Image 
                    src="https://bnaconsulting.co.uk/wp-content/uploads/2019/09/bna-1.png"
                    alt="BNA Consulting"
                    fill
                    className="object-contain object-left"
                 />
            </div>
            <p className="text-gray-400 font-sans text-sm leading-relaxed">
                We are experienced and qualified English and Russian speaking executive Accounting & Consulting firm based in London.
            </p>
            <div className="space-y-2 text-gray-400 font-sans text-sm pt-2">
              <p>1 Kingdom Street, Paddington, <br />London, W2 6BD</p>
              <p>Phone: <span className="text-white">0208 991 991 0</span></p>
              <p>Email: <span className="text-white">info@bnaconsulting.co.uk</span></p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3 text-gray-400 font-sans text-sm">
              <li><Link href="/about-us" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/registration" className="hover:text-primary transition-colors">Registration Forms</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-primary">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="bg-[#333] p-3 rounded-full hover:bg-primary transition-colors"><Facebook size={18} /></a>
              <a href="#" className="bg-[#333] p-3 rounded-full hover:bg-primary transition-colors"><Instagram size={18} /></a>
              <a href="#" className="bg-[#333] p-3 rounded-full hover:bg-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="bg-[#333] p-3 rounded-full hover:bg-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-primary">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for latest updates.</p>
            <form className="flex">
              <input type="email" placeholder="Your Email" className="bg-[#333] text-white px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary" />
              <button className="bg-primary px-4 py-2 hover:bg-primary-dark transition-colors">Go</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} BNA Consulting. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
