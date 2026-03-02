'use client';

import Image from 'next/image';
import AnimatedSection from './AnimatedSection';

const checks = [
  'No Sales or Recruiting Required',
  'No Startup Costs',
  'No Monthly Fees',
  'You Control Your Funds',
  'No Leverage Required',
  'Get Paid Daily — Daily Payouts',
];

export default function Performance() {
  return (
    <section id="performance" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-4">AI Auto-Trading Performance</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Endotech&apos;s Newest <span className="gradient-text">AI Auto-Trading System</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            <strong className="text-white">20–40% monthly returns</strong>, no leverage needed, <strong className="text-white">daily payouts</strong>.
            Real results backed by EndoTech&apos;s <strong className="text-white">AI copy trading</strong> algorithms.
          </p>
        </AnimatedSection>

        {/* BTCUSDT Performance Evolution */}
        <AnimatedSection delay={0.2} className="mb-12">
          <div className="glass-card p-4 sm:p-6 max-w-4xl mx-auto">
            <Image
              src="/images/image.jpg"
              alt="BTCUSDT Performance Evolution — AI v2.2: 180% Algo P&L, 82.4% Win Rate"
              width={1200}
              height={675}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>
        </AnimatedSection>

        {/* Checkmarks */}
        <AnimatedSection delay={0.3} className="max-w-3xl mx-auto">
          <div className="glass-card p-8 sm:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-8">
              Zero Barriers to <span className="gradient-text">AI Copy Trading</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {checks.map((c) => (
                <div key={c} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-neon-green/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
