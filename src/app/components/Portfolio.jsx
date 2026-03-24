"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import portfolio1 from "../../../public/portfolio-1.png";
import portfolio2 from "../../../public/portfolio-2.png";
import portfolio3 from "../../../public/portfolio-3.png";
import portfolio4 from "../../../public/portfolio-4.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      category: "Design Portfolio",
      description: "Site portfolio moderne pour designer créatif",
      image: portfolio1,
      link: "https://luandadelorenzo.com/",
      tags: ["Custom Design", "Responsive", "Modern UI"]
    },
    {
      id: 2,
      title: "Solar Renovation",
      category: "Service Business",
      description: "Site vitrine pour entreprise de rénovation énergétique",
      image: portfolio2,
      link: "https://renovartisan.fr/",
      tags: ["Custom Design", "SEO Optimized", "Lead Generation"]
    },
    {
      id: 3,
      title: "Plumbing & Heating",
      category: "Local Business",
      description: "Site professionnel pour artisan plombier",
      image: portfolio4,
      link: "#",
      tags: ["Local SEO", "Mobile First", "Fast Loading"]
    },
    {
      id: 4,
      title: "Ambulance Service",
      category: "Emergency Services",
      description: "Site responsive pour service d'ambulance",
      image: portfolio3,
      link: "https://ambulancesprada.fr/",
      tags: ["Emergency Ready", "Contact Forms", "Trust Badges"]
    }
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-b from-[#0A0F29] to-[#0A0F29]/95">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Centered Badge */}
        <motion.div 
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#9B5DE5]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9B5DE5]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
            <span className="text-sm text-gray-300 tracking-wide">Sites Réalisés</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Un aperçu de nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5DE5]">
              designs modernes
            </span>{" "}
            et performants
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Des créations uniques pour des clients exigeants. Chaque projet est pensé pour maximiser l'impact et la conversion.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-[#0A0F29]/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-[#9B5DE5]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9B5DE5]/10"
            >
              {/* Image Container with Overlay */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  width={800}
                  height={600}
                />
                
                {/* "Real project – Custom design" Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 bg-[#00E5FF]/90 backdrop-blur-sm text-[#0A0F29] text-xs font-semibold px-3 py-1.5 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Real project – Custom design
                  </span>
                </div>

                {/* Dark Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29]/90 via-[#0A0F29]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="space-y-2">
                    <p className="text-[#00E5FF] text-sm font-semibold uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2 py-1 rounded-full bg-[#9B5DE5]/20 text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-4 text-white bg-[#9B5DE5] hover:bg-[#7C3AED] px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(155,93,229,0.3)]"
                    >
                      Voir le site
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Info - Always Visible */}
              <div className="p-6 border-t border-gray-700/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {project.category}
                    </p>
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00E5FF] hover:text-[#9B5DE5] transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-[#9B5DE5] text-[#9B5DE5] hover:bg-[#9B5DE5] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Voir tous nos projets
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;