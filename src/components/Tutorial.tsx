'use client';

import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRefLink } from '@/lib/RefLinkContext';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const tutorialSteps = [
  {
    num: 1,
    title: 'Create Your Account',
    desc: 'Register through the exclusive invitation link to join Bit1 Exchange via the Limitless IB Portal.',
    details: [
      'Click the referral registration link',
      'Enter your full name and email address',
      'Create a strong password',
      'No KYC or identity verification needed',
    ],
    cta: true,
  },
  {
    num: 2,
    title: 'Verify & Access Dashboard',
    desc: 'Confirm your email and explore the Limitless dashboard where you manage everything.',
    details: [
      'Check your inbox for the verification email',
      'Click the confirmation link to activate',
      'Log in to your personal Limitless dashboard',
      'Explore account settings and features',
    ],
  },
  {
    num: 3,
    title: 'Fund Your Bit1 Exchange',
    desc: 'Access Bit1 Exchange with the same credentials and deposit crypto to start trading.',
    details: [
      'Navigate to Bit1 Exchange from your dashboard',
      'Log in with the same email and password',
      'Go to the deposit section and choose your crypto',
      'Send funds from your wallet to Bit1',
    ],
  },
  {
    num: 4,
    title: 'Activate AI Copy Trading',
    desc: 'Select an EndoTech AI strategy and let the algorithm trade for you 24/7 with daily payouts.',
    details: [
      'Open the AI Copy Trading section',
      'Browse strategies sorted by performance',
      'Allocate funds to your chosen strategy',
      'AI copy trading runs automatically — earn daily',
    ],
    guideLink: 'https://intercom.help/bit1-ventures-sab/en/articles/13730240-how-to-join-copy-trading-and-follow-a-trader',
  },
];

function TutorialStep({ step, index }: { step: (typeof tutorialSteps)[number]; index: number }) {
  const MAIN_REF_LINK = useRefLink();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Connector line */}
      {index < tutorialSteps.length - 1 && (
        <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-neon-blue/30 to-transparent hidden sm:block" />
      )}

      <div className={`glass-card p-6 sm:p-8 ${step.cta ? 'border-neon-green/30 bg-neon-green/5' : ''}`}>
        <div className="flex items-start gap-5">
          {/* Step number circle */}
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-neon-blue to-neon-green flex items-center justify-center text-dark-900 font-black text-xl">
            {step.num}
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold">{step.title}</h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">{step.desc}</p>

            {/* Detail sub-steps */}
            <div className="space-y-2.5">
              {step.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-neon-blue/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-neon-blue text-xs font-bold">{i + 1}</span>
                  </div>
                  <span className="text-gray-300 text-sm">{detail}</span>
                </div>
              ))}
            </div>

            {/* Embedded CTA for step 1 */}
            {step.cta && (
              <div className="mt-5">
                <a
                  href={MAIN_REF_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-neon-blue to-neon-green text-dark-900 font-bold text-sm hover:shadow-lg hover:shadow-neon-blue/25 transition-all"
                >
                  Register Now — Start AI Copy Trading
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            )}

            {/* Guide link for copy trading */}
            {step.guideLink && (
              <div className="mt-5">
                <a
                  href={step.guideLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon-blue/40 bg-neon-blue/10 text-neon-blue font-bold text-sm hover:bg-neon-blue/20 hover:shadow-lg hover:shadow-neon-blue/15 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Watch: How to Join Copy Trading &amp; Follow a Trader
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Tutorial() {
  const MAIN_REF_LINK = useRefLink();
  return (
    <section id="tutorial" className="relative py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-4">Full Tutorial</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            How to Start <span className="gradient-text">AI Copy Trading</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow this step-by-step guide to set up your <strong className="text-white">AI copy trading</strong> account
            on Bit1 Exchange. From registration to automated profits &mdash; everything explained.
          </p>
        </AnimatedSection>

        {/* Tutorial Video */}
        <AnimatedSection className="mb-12">
          <div className="video-wrapper max-w-3xl mx-auto">
            <div className="aspect-video">
              <ReactPlayer
                url="/videos/tutorial.mp4"
                width="100%"
                height="100%"
                controls
                light="/thumbs/video-thumb.png"
                playing={false}
                config={{
                  file: { attributes: { poster: '/thumbs/video-thumb.png' } },
                }}
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white text-lg">BIT1 User Setup Instructions</h3>
              <p className="text-gray-400 text-sm mt-1">Watch the full walkthrough before following the steps below.</p>
            </div>
          </div>
        </AnimatedSection>

        <div className="space-y-6">
          {tutorialSteps.map((step, i) => (
            <TutorialStep key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.5} className="mt-12 text-center">
          <a
            href={MAIN_REF_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow text-lg"
          >
            Get Started Now &mdash; AI Copy Trading
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <p className="text-gray-500 text-sm mt-3">No fees, no KYC, no risk. Your funds stay in your control.</p>
        </AnimatedSection>
      </div>
    </section>
  );
}
