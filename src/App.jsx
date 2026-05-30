import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('section-visible');
          entry.target.classList.remove('section-exiting');
        } else if (entry.boundingClientRect.top < 0) {
          entry.target.classList.add('section-exiting');
        }
      });
    }, { threshold: 0.15, rootMargin: '-10% 0px -10% 0px' });

    document.querySelectorAll('section').forEach(sec => sectionObserver.observe(sec));

    const elementObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          elementObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2, rootMargin: '0px 0px -10% 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => elementObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      elementObserver.disconnect();
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <div className="gradient-blur">
        <div></div><div></div><div></div><div></div>
      </div>

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </main>

      <ScrollToTop />
    </>
  );
}
