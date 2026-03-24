"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import whyChooseImage from "../../../public/why-choose.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 576 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M464 0H112c-4 0-7.8 2-10 5.4L2 152.6c-2.9 4.4-2.6 10.2.7 14.2l276 340.8c4.8 5.9 13.8 5.9 18.6 0l276-340.8c3.3-4.1 3.6-9.8.7-14.2L474.1 5.4C471.8 2 468.1 0 464 0zm-19.3 48l63.3 96h-68.4l-51.7-96h56.8zm-202.1 0h90.7l51.7 96H191l51.6-96zm-111.3 0h56.8l-51.7 96H68l63.3-96zm-43 144h51.4L208 352 88.3 192zm102.9 0h193.6L288 435.3 191.2 192zM368 352l68.2-160h51.4L368 352z" fill="#0A0F29"/>
        </svg>
      ),
      title: "Prix Justes",
      description: "Des tarifs transparents sans surprise, adaptés à votre budget."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 320 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z" fill="#0A0F29"/>
        </svg>
      ),
      title: "Livraison Rapide",
      description: "Votre site livré en seulement 5 jours ouvrés."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 640 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z" fill="#0A0F29"/>
        </svg>
      ),
      title: "Client Ciblé",
      description: "Idéal pour artisans, commerçants, restaurants, salons et associations."
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 496 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z" fill="#0A0F29"/>
        </svg>
      ),
      title: "Sites Évolutifs",
      description: "Ajoutez des pages ou du SEO plus tard selon vos besoins."
    }
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-b from-[#0A0F29]/95 to-[#0A0F29]">
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
            <span className="text-sm text-gray-300 tracking-wide">Sites Évolutifs</span>
          </div>
        </motion.div>

        {/* Title - Centered */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Pourquoi choisir{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5DE5]">
              Youlander
            </span>{" "}
            pour réussir
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Nous créons des sites web modernes, rapides et évolutifs qui propulsent votre activité en ligne.
          </p>
        </motion.div>

        {/* Split Layout - Image and Features */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-8">
          
          {/* LEFT SIDE - Image */}
          <motion.div 
            className="relative group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/20 to-[#9B5DE5]/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl border border-gray-700/50 shadow-2xl">
              <Image
                src={whyChooseImage}
                alt="Youlander - Sites web modernes et évolutifs"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                width={1536}
                height={1024}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F29]/40 to-transparent" />
            </div>
          </motion.div>

          {/* RIGHT SIDE - Features Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group/feature flex gap-4 p-4 rounded-xl bg-[#0A0F29]/40 backdrop-blur-sm border border-gray-700/30 hover:border-[#9B5DE5]/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-[#00E5FF] flex items-center justify-center shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;