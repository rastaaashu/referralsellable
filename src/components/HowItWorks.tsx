'use client';

import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRefLink } from '@/lib/RefLinkContext';

const steps = [
  {
    num: '01',
    title: 'Register via Referral Link',
    desc: 'Sign up with your name and email using the exclusive invitation link below. Takes 30 seconds — no KYC required.',
    highlight: true,
    substeps: [
      'Click the registration button below',
      'Enter your name, email, and create a password',
      'You will be registered on the Limitless IB Portal',
    ],
  },
  {
    num: '02',
    title: 'Verify Email & Login',
    desc: 'Check your inbox for the verification email, confirm your address, then log in to your Limitless dashboard.',
    substeps: [
      'Open the verification email (check spam if needed)',
      'Click the confirmation link',
      'Log in with your new credentials',
    ],
  },
  {
    num: '03',
    title: 'Access Bit1 Exchange',
    desc: 'From your Limitless dashboard, navigate to the Bit1 Crypto Exchange. Your credentials carry over — seamless integration.',
    substeps: [
      'Find the "Bit1 Exchange" link in your dashboard',
      'Log in with the same email and password',
      'Explore the exchange interface and deposit funds',
    ],
  },
  {
    num: '04',
    title: 'Start AI Copy Trading',
    desc: 'Select from top-performing EndoTech AI copy trading strategies and let the AI trade for you automatically.',
    substeps: [
      'Navigate to the Copy Trading section',
      'Browse available AI strategies and performance history',
      'Select a strategy and allocate your funds',
      'AI copy trading begins — sit back and earn daily',
    ],
  },
];

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const MAIN_REF_LINK = useRefLink();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`step-card ${step.highlight ? 'border-neon-green/30 bg-neon-green/5' : ''}`}
    >
      <div className="flex gap-5">
        {/* Number */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center text-dark-900 font-black text-lg">
          {step.num}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-bold text-lg">{step.title}</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
        </div>
      </div>

      {/* Sub-steps */}
      {step.substeps && (
        <div className="mt-4 ml-[4.25rem] space-y-2">
          {step.substeps.map((sub, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-500">
              <span className="text-neon-blue mt-0.5 flex-shrink-0">&bull;</span>
              <span>{sub}</span>
            </div>
          ))}
        </div>
      )}

      {/* CTA embedded in step 1 */}
      {step.highlight && (
        <div className="mt-4 ml-[4.25rem]">
          <a
            href={MAIN_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-neon-blue to-neon-green text-dark-900 font-bold text-sm hover:shadow-lg hover:shadow-neon-blue/20 transition-all"
          >
            Register Now — Invitation Only
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      )}
    </motion.div>
  );
}

export default function HowItWorks() {
  const MAIN_REF_LINK = useRefLink();
  return (
    <section id="steps" className="relative py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-neon-green text-sm font-semibold tracking-widest uppercase mb-4">Step-by-Step Tutorial</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            How to Start <span className="gradient-text">AI Copy Trading</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get started in 4 simple steps. No KYC, no complex setup. Your <strong className="text-white">AI copy trading</strong> journey begins here.
          </p>
        </AnimatedSection>

        {/* Vertical connector line */}
        <div className="relative">
          <div className="absolute left-[1.375rem] top-6 bottom-6 w-px bg-gradient-to-b from-neon-blue/40 via-neon-green/20 to-transparent hidden sm:block" />
          <div className="space-y-4">
            {steps.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <AnimatedSection delay={0.4} className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={MAIN_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow"
          >
            Register Now &mdash; Invitation Only
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={MAIN_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-neon-blue/30 text-neon-blue font-semibold hover:bg-neon-blue/10 transition-all"
          >
            Go to BIT1 Exchange
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
