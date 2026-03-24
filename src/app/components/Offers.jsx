"use client";

import React from "react";
import { motion } from "framer-motion";

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

const OffersSection = () => {
  const offers = [
    {
      name: "Satellite Basic",
      price: "299 €",
      period: "une fois",
      icon: (
        <svg width="46" height="46" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.457 8.25L12.8535 6.8535C12.9472 6.75974 12.9999 6.63258 12.9999 6.5C12.9999 6.36742 12.9472 6.24026 12.8535 6.1465L11.707 5L12.75 3.957L14.293 5.5L15 4.793L11.207 1L10.5 1.707L12.043 3.25L11 4.293L9.8535 3.1465C9.75974 3.05276 9.63258 3.00011 9.5 3.00011C9.36742 3.00011 9.24026 3.05276 9.1465 3.1465L7.75 4.543L4.3535 1.1465C4.25974 1.05276 4.13258 1.00011 4 1.00011C3.86742 1.00011 3.74026 1.05276 3.6465 1.1465L1.1465 3.6465C1.05276 3.74026 1.00011 3.86742 1.00011 4C1.00011 4.13258 1.05276 4.25974 1.1465 4.3535L4.543 7.75L3.1465 9.1465C3.05276 9.24026 3.00011 9.36742 3.00011 9.5C3.00011 9.63258 3.05276 9.75974 3.1465 9.8535L4.293 11L3.25 12.043L1.707 10.5L1 11.207L4.793 15L5.5 14.293L3.957 12.75L5 11.707L6.1465 12.8535C6.24026 12.9472 6.36742 12.9999 6.5 12.9999C6.63258 12.9999 6.75974 12.9472 6.8535 12.8535L8.25 11.457L11.6465 14.8535C11.7403 14.9472 11.8674 14.9999 12 14.9999C12.1326 14.9999 12.2597 14.9472 12.3535 14.8535L14.8535 12.3535C14.9472 12.2597 14.9999 12.1326 14.9999 12C14.9999 11.8674 14.9472 11.7403 14.8535 11.6465L11.457 8.25ZM2.207 4L4 2.207L5.043 3.25L3.25 5.043L2.207 4ZM3.957 5.75L5.75 3.957L7.043 5.25L5.25 7.043L3.957 5.75ZM6.5 11.793L4.207 9.5L9.5 4.207L11.793 6.5L6.5 11.793ZM8.957 10.75L10.75 8.957L12.043 10.25L10.25 12.043L8.957 10.75ZM12 13.793L10.957 12.75L12.75 10.957L13.793 12L12 13.793Z" fill="#0A0F29"/>
        </svg>
      ),
      description: "Un site vitrine simple et efficace pour lancer votre présence en ligne.",
      features: [
        "Site vitrine 1 page (présentation + contact)",
        "Nom de domaine inclus (1 an)",
        "Design responsive (mobile/tablette)",
        "Livraison en 7 jours ouvrés"
      ],
      popular: false
    },
    {
      name: "Double Orbit",
      price: "399 €",
      period: "une fois",
      icon: (
        <svg width="46" height="46" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.98754 1.94434C7.20317 1.94434 6.40317 2.10122 5.63442 2.42809C2.55442 3.73466 1.12067 7.28466 2.42785 10.3659C2.5766 10.7128 2.75442 11.044 2.95692 11.3503C2.56317 11.3597 2.2241 11.3347 1.95754 11.2753C1.54442 11.1847 1.33473 11.0315 1.2616 10.8597C1.18879 10.6847 1.22254 10.4284 1.44504 10.0659C1.4966 9.98466 1.55817 9.89716 1.62817 9.80341C1.56254 9.57216 1.51067 9.34403 1.47035 9.10966C1.26348 9.33153 1.09223 9.55341 0.958791 9.76903C0.685666 10.2097 0.563166 10.6722 0.736603 11.0815C0.909728 11.4909 1.32723 11.7222 1.83567 11.8315C2.26254 11.9253 2.77723 11.944 3.36567 11.9003C5.02817 13.8815 7.85317 14.6378 10.3625 13.569C12.8719 12.5034 14.2875 9.95341 14.0219 7.37841C14.4625 6.98466 14.8094 6.60028 15.0375 6.22841C15.3157 5.78466 15.4344 5.32216 15.2625 4.91591C15.0875 4.50653 14.6719 4.27528 14.1625 4.16278C13.9157 4.10966 13.6344 4.07841 13.3344 4.07528C13.475 4.26591 13.6032 4.46278 13.7219 4.67216C13.8375 4.68466 13.9438 4.70028 14.0375 4.72216C14.4532 4.80966 14.6625 4.96591 14.7344 5.13778C14.8094 5.30966 14.775 5.56903 14.55 5.92841C14.4094 6.15966 14.1938 6.42216 13.9125 6.70028C13.9594 6.92841 13.9969 7.15341 14.0188 7.37841C13.9375 7.45028 13.8469 7.52528 13.7625 7.60028C13.6157 7.71903 13.4657 7.84091 13.3032 7.95966C13.6532 8.95966 13.1657 10.0784 12.1813 10.4972C11.3594 10.8472 10.4313 10.6097 9.86879 9.97216C9.58442 10.1065 9.29692 10.2347 9.00004 10.3628C7.04692 11.1878 5.17504 11.7065 3.71254 11.8659C3.59379 11.8784 3.47817 11.8878 3.36879 11.9003C3.22192 11.7253 3.0891 11.544 2.95879 11.3503C3.17192 11.344 3.40317 11.3284 3.64692 11.3003C5.03442 11.1472 6.86567 10.6472 8.77817 9.83466C9.04067 9.72528 9.30004 9.60653 9.55317 9.49091C9.54067 9.46903 9.53129 9.44716 9.52192 9.42528C9.08442 8.39716 9.56879 7.20028 10.5969 6.76591C11.4813 6.38778 12.4938 6.70028 13.0344 7.44716C13.1594 7.35028 13.2813 7.25653 13.3938 7.16278C13.5844 7.00653 13.7563 6.85028 13.9125 6.70028C13.8313 6.34091 13.7188 5.98466 13.5688 5.63466C12.5875 3.32528 10.3469 1.94028 7.98754 1.94434ZM11.3844 7.17528C11.2 7.17528 11.0063 7.21278 10.8188 7.29091C10.0782 7.60653 9.73129 8.45653 10.05 9.20341C10.3625 9.94716 11.2157 10.2878 11.9594 9.97216C12.7 9.65966 13.0469 8.80653 12.7282 8.06278C12.4938 7.50341 11.9563 7.17216 11.3844 7.17528Z" fill="#0A0F29"/>
        </svg>
      ),
      description: "Un site plus complet pour présenter vos services ou produits.",
      features: [
        "Site vitrine 2 pages (Accueil + Services/Produits)",
        "Formulaire de contact inclus",
        "SEO basique inclus",
        "Nom de domaine inclus (1 an)"
      ],
      popular: true
    },
    {
      name: "HyperDrive SEO",
      price: "300 €",
      period: "/mois",
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1605 22.19L11.5005 18.35C13.1005 17.77 14.5705 17 15.9305 16.08L13.1505 22.19M5.65055 12.5L1.81055 10.85L7.92055 8.06999C7.00055 9.42999 6.23055 10.91 5.65055 12.5ZM20.0005 3.99999C17.0405 3.77999 14.8005 4.82999 12.4505 7.30999C10.0905 9.77999 9.09055 11.81 8.50055 13.35L10.6705 15.45C12.9605 14.58 15.0005 13.27 16.7005 11.56C20.0005 8.26999 20.1705 5.39999 20.0005 3.99999ZM11.0005 5.89999C13.6305 3.09999 18.0005 1.07999 21.6605 2.34999C21.6605 2.34999 23.7805 7.30999 18.1105 13C15.9105 15.17 13.5305 16.5 11.3905 17.34C11.1505 17.43 10.2405 17.73 9.26055 16.88L7.13055 14.75C6.57055 14.19 6.39055 13.37 6.66055 12.62C7.50055 10.5 8.41055 8.68999 11.0005 5.89999ZM6.25055 22H4.84055L8.93055 17.9C9.23055 18.11 9.56055 18.26 9.90055 18.35L6.25055 22ZM2.00055 22V20.59L6.77055 15.81L8.20055 17.23L3.41055 22H2.00055ZM2.00055 19.17V17.75L5.65055 14.1C5.74055 14.45 5.89055 14.78 6.10055 15.07L2.00055 19.17ZM16.0005 5.99999C16.531 5.99999 17.0397 6.21071 17.4148 6.58578C17.7898 6.96085 18.0005 7.46956 18.0005 7.99999C18.0005 9.10999 17.1105 9.99999 16.0005 9.99999C15.4701 9.99999 14.9614 9.78928 14.5863 9.41421C14.2113 9.03913 14.0005 8.53043 14.0005 7.99999C14.0005 7.46956 14.2113 6.96085 14.5863 6.58578C14.9614 6.21071 15.4701 5.99999 16.0005 5.99999Z" fill="#0A0F29"/>
        </svg>
      ),
      description: "Un pack de référencement pour propulser votre visibilité en ligne.",
      features: [
        "Création & optimisation de fiche Google Business",
        "Référencement local (Google Maps)",
        "Mise en place de l'identité digitale",
        "Optimisation & rapport mensuel"
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-8 md:py-12 bg-gradient-to-b from-[#0A0F29] to-[#0A0F29]/95">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with fade-up */}
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#9B5DE5]/10 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9B5DE5]/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
            <span className="text-sm text-gray-300 tracking-wide">Nos Offres</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nos offres pour booster votre{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5DE5]">
              présence digitale
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions adaptées à vos besoins, du site vitrine simple au référencement complet
          </p>
        </motion.div>

        {/* Cards Grid with staggered animation */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`group relative bg-[#0A0F29]/80 backdrop-blur-sm border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl ${
                offer.popular 
                  ? "border-[#9B5DE5]/50 shadow-lg shadow-[#9B5DE5]/10" 
                  : "border-gray-700/50 hover:border-[#9B5DE5]/30"
              }`}
            >
              {/* Popular Badge */}
              {offer.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#9B5DE5] to-[#00E5FF] text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Populaire
                  </span>
                </div>
              )}

              {/* Icon with Cyan/Blue Background */}
              <div className="mb-6">
                <motion.div 
                  className="w-16 h-16 rounded-xl bg-[#00E5FF] flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {offer.icon}
                </motion.div>
              </div>

              {/* Title & Price */}
              <h3 className="text-2xl font-bold text-white mb-2">{offer.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5DE5]">
                  {offer.price}
                </span>
                <span className="text-gray-400 text-sm ml-1">{offer.period}</span>
              </div>
              
              {/* Description */}
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {offer.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {offer.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <svg className="w-5 h-5 text-[#00E5FF] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#form"
                className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                  offer.popular
                    ? "bg-gradient-to-r from-[#9B5DE5] to-[#7C3AED] text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(155,93,229,0.3)]"
                    : "bg-transparent border border-gray-600 text-gray-300 hover:border-[#9B5DE5] hover:text-white hover:scale-105"
                }`}
              >
                Créer mon site maintenant
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OffersSection;