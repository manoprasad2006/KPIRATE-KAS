import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CodeSection from './components/CodeSection';
import TokenomicsSection from './components/TokenomicsSection';
import RoadmapSection from './components/RoadmapSection';
import NFTCollectionSection from './components/NFTCollectionSection';
import CommunitySection from './components/CommunitySection';
import DonationSection from './components/DonationSection';
import WhitepaperSection from './components/WhitepaperSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <CodeSection />
      <TokenomicsSection />
      <RoadmapSection />
      <NFTCollectionSection />
      <CommunitySection />
      <DonationSection />
    </>
  );
}

function App() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
        <Navbar />
        <AnimatedBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whitepaper" element={<WhitepaperSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;