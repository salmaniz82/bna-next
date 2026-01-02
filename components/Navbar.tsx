"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 shadow-md" : "relative"}`}>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6">
          <a href="mailto:info@bnaconsulting.co.uk" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail size={14} /> info@bnaconsulting.co.uk
          </a>
          <a href="tel:02089919910" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={14} /> 0208 991 991 0
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={14} /> 1 Kingdom Street, Paddington, W2 6BD.
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`bg-white transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="font-serif text-3xl font-bold tracking-widest text-secondary group-hover:opacity-80 transition-opacity">BNA</span>
            <span className="text-[0.6rem] tracking-[0.3em] text-gray-500 uppercase">Consulting</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-secondary">
            <Link href="/" className="text-primary font-bold">Home</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
            <div className="group relative">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                Services <span className="text-xs">▼</span>
              </button>
              {/* Dropdown placeholder */}
            </div>
            <Link href="/registration" className="hover:text-primary transition-colors">Registration Forms</Link>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <button className="hover:text-primary transition-colors">
              <Search size={18} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <nav className="flex flex-col p-4 space-y-4 font-sans text-secondary">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-primary font-bold">Home</Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
