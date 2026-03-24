"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../../public/hero-bg.webp"

const Hero = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    siteType: "1 page – 299 €",
    seoOption: "Non",
    activity: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        siteType: "1 page – 299 €",
        seoOption: "Non",
        activity: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section className="relative min-h-screen mt-6 flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay - Reduced intensity */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${backgroundImage.src})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F29]/80 via-[#0A0F29]/70 to-[#0A0F29]/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT SIDE - Content with fade-up animation */}
          <motion.div 
          suppressHydrationWarning
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <h1 className="text-white font-heading text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-bold leading-tight">
              Lancez votre site web dans l'univers digital dès{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5DE5]">
                299 €
              </span>
            </h1>

            <p className="font-body text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg">
              Un site moderne, rapide et connecté au monde. Boostez votre présence en ligne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#form"
                className="group inline-flex items-center justify-center bg-[#9B5DE5] text-white font-heading font-semibold px-8 py-4 rounded-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(155,93,229,0.3)] transition-all duration-300 text-center"
              >
                Créer mon site maintenant
                <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center bg-transparent border-2 border-gray-600 hover:border-[#9B5DE5] text-gray-300 hover:text-white font-body px-8 py-4 rounded-xl transition-all duration-300 text-center"
              >
                Voir nos réalisations
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Form with fade-up animation (slight delay) */}
          <motion.div 
            id="form" 
            className="bg-[#0A0F29]/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="font-heading text-2xl font-bold mb-2 text-white">
              Demandez votre devis
            </h3>
            <p className="font-body text-gray-400 mb-6 text-sm">
              Réponse sous 24h. Sans engagement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-gray-300 mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0F29] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9B5DE5] focus:ring-1 focus:ring-[#9B5DE5] text-white font-body transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0F29] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9B5DE5] focus:ring-1 focus:ring-[#9B5DE5] text-white font-body transition-all"
                    placeholder="exemple@gmail.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-300 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#0A0F29] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9B5DE5] focus:ring-1 focus:ring-[#9B5DE5] text-white font-body transition-all"
                  placeholder="+33 6 12 34 56 78"
                />
              </div>

              {/* Site Type and SEO Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block font-body text-sm font-medium text-gray-300 mb-2">
                    Type de site *
                  </label>
                  <select
                    name="siteType"
                    value={formData.siteType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#0A0F29] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9B5DE5] focus:ring-1 focus:ring-[#9B5DE5] text-white font-body cursor-pointer"
                  >
                    <option value="1 page – 299 €">1 page – 299 €</option>
                    <option value="2 pages – 399 €">2 pages – 399 €</option>
                    <option value="3-5 pages – 599 €">3-5 pages – 599 €</option>
                  </select>
                </div>
                <div>
                  <label className="block font-body text-sm font-medium text-gray-300 mb-2">
                    Option SEO (300 €/mois)
                  </label>
                  <select
                    name="seoOption"
                    value={formData.seoOption}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0A0F29] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9B5DE5] focus:ring-1 focus:ring-[#9B5DE5] text-white font-body cursor-pointer"
                  >
                    <option value="Non">Non, merci</option>
                    <option value="Oui">Oui, je veux être visible</option>
                  </select>
                </div>
              </div>

              {/* Activity */}
              <div>
                <label className="block font-body text-sm font-medium text-gray-300 mb-2">
                  Activité / Secteur
                </label>
                <textarea
                  name="activity"
                  value={formData.activity}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 bg-[#0A0F29] border border-gray-700 rounded-lg focus:outline-none focus:border-[#9B5DE5] focus:ring-1 focus:ring-[#9B5DE5] text-white font-body transition-all resize-none"
                  placeholder="Décrivez brièvement votre activité..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#9B5DE5] to-[#7C3AED] text-white font-heading font-semibold px-6 py-4 rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(155,93,229,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div 
                  className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-green-400 text-sm font-body">
                    ✓ Demande envoyée avec succès ! Nous vous contacterons sous 24h.
                  </p>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div 
                  className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <p className="text-red-400 text-sm font-body">
                    ✗ Une erreur est survenue. Veuillez réessayer.
                  </p>
                </motion.div>
              )}

              <p className="text-xs text-gray-500 text-center font-body">
                En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;