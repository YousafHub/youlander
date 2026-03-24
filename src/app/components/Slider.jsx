"use client";

import React from "react";

const MarqueeSlider = () => {
  const features = [
    "Livraison Rapide",
    "Tarifs Transparents",
    "Design Responsive",
    "SEO & Présence en Ligne",
    "Designs Modernes & Futuristes",
    "Solutions Évolutives & Flexibles",
  ];

  const duplicatedFeatures = [...features, ...features];

  return (
    <div className="md:mt-20 my-4 relative overflow-hidden bg-gradient-to-r from-[#0A0F29] via-[#0A0F29]/95 to-[#0A0F29]">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0A0F29] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0A0F29] to-transparent z-10 pointer-events-none" />
      
      <div className="overflow-hidden whitespace-nowrap py-3 md:py-4">
        <div className="inline-flex animate-marquee">
          {duplicatedFeatures.map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center mx-6 md:mx-8 lg:mx-10"
            >
              <span className="text-[#9B5DE5] text-sm md:text-base lg:text-lg font-semibold uppercase tracking-wider">
                {feature}
              </span>
              <span className="w-1 h-1 bg-[#9B5DE5]/40 rounded-full ml-6 md:ml-8 lg:ml-10" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeSlider;