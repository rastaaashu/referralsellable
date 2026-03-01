'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeroVideo from '@/components/HeroVideo';
import Performance from '@/components/Performance';
import WhyBit1 from '@/components/WhyBit1';
import Videos from '@/components/Videos';
import Tutorial from '@/components/Tutorial';
import HowItWorks from '@/components/HowItWorks';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import SupportWidget from '@/components/SupportWidget';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <HeroVideo />
      <div className="section-divider" />
      <Performance />
      <div className="section-divider" />
      <WhyBit1 />
      <div className="section-divider" />
      <Videos />
      <div className="section-divider" />
      <Tutorial />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <FinalCTA />
      <Footer />
      <SupportWidget />
    </main>
  );
}
