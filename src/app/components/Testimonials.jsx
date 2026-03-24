"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Propriétaire d'un salon de coiffure",
    content: "Youlander a créé un site moderne et rapide pour mon salon. Grâce à leur équipe, j'ai gagné en visibilité et mes clients me trouvent facilement en ligne.",
    rating: 5,
    location: "Paris",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Julien Morel",
    role: "Propriétaire d'un salon de coiffure à Lyon",
    content: "Grâce à Youlander, j'ai enfin un site moderne qui reflète l'image de mon salon. Mes clients peuvent maintenant réserver en ligne et je reçois beaucoup plus de demandes chaque semaine.",
    rating: 5,
    location: "Lyon",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Sarah Leroy",
    role: "Gérant d'un restaurant à Bordeaux",
    content: "Youlander a transformé notre présence en ligne. Le site est rapide, beau et facile à gérer. Les clients trouvent le menu et réservent en quelques clics — un vrai gain de temps !",
    rating: 5,
    location: "Bordeaux",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Léa Fontaine",
    role: "Coach de vie indépendante",
    content: "Je n'avais aucune expérience en création de site, mais l'équipe Youlander m'a accompagnée pas à pas. Mon site attire maintenant de nouveaux clients chaque mois.",
    rating: 5,
    location: "Lille",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    id: 5,
    name: "Thomas Garnier",
    role: "Photographe professionnel à Marseille",
    content: "Mon portfolio en ligne est superbe ! Le design est épuré et met mes photos en valeur. Depuis la mise en ligne, j'ai doublé mes demandes de shooting.",
    rating: 5,
    location: "Marseille",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    id: 6,
    name: "Nicolas Bernard",
    role: "Consultant en marketing digital",
    content: "Je recommande Youlander à tous mes clients. Le service est rapide, l'équipe à l'écoute et les sites livrés sont vraiment performants. Une solution clé en main !",
    rating: 5,
    location: "Paris",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? maxIndex : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Container variants for staggered animation
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <section className="py-20 md:py-12 bg-gradient-to-b from-[#0A0F29] to-[#0A0F29]/95">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Badge */}
        <motion.div 
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#9B5DE5]/10 px-4 py-2 rounded-full border border-[#9B5DE5]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]"></span>
            <span className="text-sm text-gray-300">Avis Clients</span>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ce que disent{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#9B5DE5]">
              nos clients
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Des retours authentiques de professionnels qui nous ont fait confiance
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-[#0A0F29] hover:bg-[#9B5DE5] text-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-[#9B5DE5] transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-[#0A0F29] hover:bg-[#9B5DE5] text-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 hover:border-[#9B5DE5] transition-colors shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonials Grid with stagger animation (no AnimatePresence) */}
          <motion.div 
            key={currentIndex}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {visibleTestimonials.map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.id}-${currentIndex}`}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-[#0A0F29]/40 rounded-2xl p-6 border border-gray-700/50 hover:border-[#9B5DE5]/30 transition-all hover:shadow-xl hover:shadow-[#9B5DE5]/10"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 flex-shrink-0 relative">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-300 leading-relaxed text-sm mt-3">
                    {testimonial.content}
                  </p>
                </div>

                {/* Location */}
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / itemsToShow) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx * itemsToShow)}
                className={`h-1.5 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsToShow) === idx
                    ? 'w-6 bg-[#9B5DE5]'
                    : 'w-1.5 bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;