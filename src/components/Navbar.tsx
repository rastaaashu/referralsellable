'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRefLink } from '@/lib/RefLinkContext';

const NAV_ITEMS = [
  { label: 'Performance', href: '#performance' },
  { label: 'Why Bit1', href: '#why' },
  { label: 'Videos', href: '#videos' },
  { label: 'Tutorial', href: '#tutorial' },
  { label: 'How It Works', href: '#steps' },
];

export default function Navbar() {
  const MAIN_REF_LINK = useRefLink();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'bg-dark-900/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <img src="/images/bit.png" alt="Bit1" className="h-10 rounded-lg object-contain" />
            <span className="font-bold text-lg hidden sm:block">
              <span className="gradient-text">BIT1</span>
              <span className="text-gray-400 text-sm ml-1">x EndoTech AI</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-gray-300 hover:text-neon-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href={MAIN_REF_LINK} target="_blank" rel="noopener noreferrer" className="btn-glow !py-2.5 !px-6 !text-sm">
              Start AI Copy Trading
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gray-300 p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="md:hidden pb-4 border-t border-white/5"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-3 text-gray-300 hover:text-neon-blue transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={MAIN_REF_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow !py-2.5 !px-6 !text-sm mt-3 w-full text-center justify-center"
            >
              Start AI Copy Trading
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
