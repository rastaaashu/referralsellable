'use client';

import AnimatedSection from './AnimatedSection';
import { useRefLink } from '@/lib/RefLinkContext';

export default function FinalCTA() {
  const MAIN_REF_LINK = useRefLink();
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-tight">
            Ready to Let <span className="gradient-text">AI Copy Trading</span>{' '}
            <br className="hidden sm:block" />
            Grow Your Wealth?
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-4">
            Invitation-only access to <strong className="text-white">Bit1 Exchange via the Limitless IB Portal</strong>.
            Join thousands of investors already earning{' '}
            <span className="text-neon-green font-bold">daily payouts</span> with
            EndoTech <strong className="text-white">AI copy trading</strong>.
          </p>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
            No fees. No leverage. Daily payouts. Your funds stay in your control. AI auto-trading does the work.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <a
            href={MAIN_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-xl px-12 py-5"
          >
            Start AI Copy Trading FREE
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.35} className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">1M+</div>
            <div className="text-gray-500 text-xs mt-1">Pre-Registered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">150+</div>
            <div className="text-gray-500 text-xs mt-1">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text">24/7</div>
            <div className="text-gray-500 text-xs mt-1">AI Copy Trading</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
