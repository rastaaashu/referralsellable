'use client';

import { motion } from 'framer-motion';
import ParticlesBg from './ParticlesBg';
import { MAIN_REF_LINK } from '@/lib/config';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particles */}
      <ParticlesBg />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900 z-[1]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-neon-blue/5 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-neon-green/5 rounded-full blur-[100px] z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          Invitation Only &mdash; Tested &amp; Ready to Go Live in 24 Hours
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight mb-6"
        >
          <span className="gradient-text">AI Copy Trading</span> on{' '}
          <br className="hidden sm:block" />
          <span className="gradient-text-alt">BIT1 + EndoTech AI</span>
        </motion.h1>

        {/* Subhead */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-xl sm:text-2xl text-gray-300 font-light tracking-wide mb-8"
        >
          Smarter. Automated. <strong className="text-white">AI-Driven Copy Trading</strong> &mdash; Go Live in 24 Hours.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="max-w-3xl mx-auto text-gray-400 text-base sm:text-lg leading-relaxed mb-10"
        >
          Dr. Anna presented live to <span className="text-white font-semibold">4,000+ investors</span>:{' '}
          <span className="text-neon-green font-bold">1000%+ annual potential</span> WITHOUT
          leverage or compounding. <span className="text-white font-semibold">15+ years</span> proven
          track record since 2018. Partnered with a{' '}
          <span className="text-white font-semibold">1M+ user exchange</span>.{' '}
          The <strong className="text-white">AI copy trading</strong> system handles everything automatically.
        </motion.p>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex items-center justify-center gap-6 mb-10"
        >
          <div className="glass-card px-6 py-3 flex items-center gap-3">
            <img src="/images/endotech.jpg" alt="EndoTech AI Copy Trading" className="h-8 sm:h-10 rounded" />
            <span className="text-gray-500 text-2xl font-thin">+</span>
            <img src="/images/bit.png" alt="Bit1 Exchange" className="h-8 sm:h-10 rounded" />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
        >
          <a
            href={MAIN_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-lg sm:text-xl"
          >
            <span>Start AI Copy Trading FREE &mdash; Invitation Only</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-4">No credit card required. Your funds stay in your control. AI copy trading starts instantly.</p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16"
        >
          <a href="#performance" className="inline-flex flex-col items-center text-gray-500 hover:text-neon-blue transition-colors">
            <span className="text-xs mb-2">Scroll to explore</span>
            <motion.svg
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
