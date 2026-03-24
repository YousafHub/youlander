"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  FaPhone, 
  FaEnvelope, 
  FaInstagram, 
  FaFacebookF, 
  FaYoutube, 
  FaTiktok, 
  FaLinkedinIn 
} from "react-icons/fa";
import Logo from "../../../public/logo.png"; // Update with your actual logo path

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Offres", href: "#offres" },
    { name: "Pourquoi nous choisir", href: "#why-choose" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Témoignages", href: "#testimonials" },
    { name: "Créez votre site", href: "#form" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: FaInstagram, url: "https://instagram.com" },
    { name: "Facebook", icon: FaFacebookF, url: "https://facebook.com" },
    { name: "YouTube", icon: FaYoutube, url: "https://youtube.com" },
    { name: "TikTok", icon: FaTiktok, url: "https://tiktok.com" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://linkedin.com" }
  ];

  return (
    <footer className="relative bg-[#0A0F29] border-t-2 border-gray-800/50">
      {/* Main Footer - Darker and Calmer */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1 - Company Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src={Logo} 
                alt="Youlander" 
                width={48} 
                height={48}
                className="w-24 h-24"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Votre partenaire de confiance pour des solutions web modernes et efficaces.
            </p>
            <div className="pt-2">
              <p className="text-gray-500 text-xs">
                © {currentYear} Youlander OÜ
              </p>
            </div>
          </div>

          {/* Column 2 - Navigation Links */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#9B5DE5]/10 flex items-center justify-center flex-shrink-0">
                  <FaPhone className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <a 
                  href="tel:+1123456789" 
                  className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors"
                >
                  +1 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#9B5DE5]/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="w-4 h-4 text-[#00E5FF]" />
                </div>
                <a 
                  href="mailto:info@gmail.com" 
                  className="text-gray-400 hover:text-[#00E5FF] text-sm transition-colors"
                >
                  info@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Legal Info & Social Links */}
      <div className="border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright & Legal */}
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-xs">
                © {currentYear} Youlander OÜ — Tous droits réservés.
              </p>
            </div>

            {/* Social Links - Clean & Minimal */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-[#00E5FF] transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;