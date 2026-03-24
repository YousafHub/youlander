import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import MarqueeSlider from './components/Slider'
import OffersSection from './components/Offers'
import WhyChooseUs from './components/Choose'
import PortfolioSection from './components/Portfolio'
import TestimonialsSection from './components/Testimonials'
import Footer from './components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <MarqueeSlider />
      <OffersSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TestimonialsSection />
      <Footer />
    </>
  )
}

export default Home