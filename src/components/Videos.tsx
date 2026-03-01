'use client';

import AnimatedSection from './AnimatedSection';
import dynamic from 'next/dynamic';
import { VIDEO_URLS } from '@/lib/config';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function Videos() {
  const { spotlight, grid } = VIDEO_URLS as { spotlight: any; grid: Array<any> };
  const activeGridVideos = grid.filter((v: any) => v.url);

  return (
    <section id="videos" className="relative py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-16">
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-4">See AI Copy Trading In Action</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Watch <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it &mdash; see the live demos, data, and proof of <strong className="text-white">AI copy trading</strong> performance.
          </p>
        </AnimatedSection>

        {/* Spotlight Video — Large */}
        <AnimatedSection className="mb-8">
          <div className="video-wrapper max-w-4xl mx-auto">
            <div className="absolute top-4 left-4 z-10 px-4 py-2 rounded-full bg-dark-900/80 backdrop-blur-sm border border-neon-green/30 text-sm text-neon-green font-semibold">
              Featured
            </div>
            <div className="aspect-video">
              <ReactPlayer
                url={spotlight.url}
                width="100%"
                height="100%"
                controls
                light={spotlight.isLocal ? '/thumbs/video-thumb.png' : true}
                playing={false}
                config={{
                  file: { attributes: { poster: '/thumbs/video-thumb.png' } },
                }}
              />
            </div>
            <div className="p-5">
              <h3 className="font-bold text-white text-lg">{spotlight.title}</h3>
              <p className="text-gray-400 text-sm mt-1">{spotlight.subtitle}</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Grid Videos — Smaller */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.15}>
              <div className="video-wrapper">
                {/* Badge */}
                {v.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-dark-900/80 backdrop-blur-sm border border-neon-blue/20 text-xs text-neon-blue font-medium">
                    {v.badge}
                  </div>
                )}

                {/* Player or Placeholder */}
                <div className="aspect-video">
                  {v.url ? (
                    <ReactPlayer
                      url={v.url}
                      width="100%"
                      height="100%"
                      controls
                      light={v.isLocal ? '/thumbs/video-thumb.png' : true}
                      playing={false}
                      config={{
                        file: { attributes: { poster: '/thumbs/video-thumb.png' } },
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-dark-800/50 border border-dashed border-white/10 rounded-xl flex flex-col items-center justify-center text-gray-500">
                      <svg className="w-12 h-12 mb-2 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-xs">Add URL in config.ts</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-bold text-white">{v.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{v.subtitle}</p>
                  {v.presentationLink && (
                    <a
                      href={v.presentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-neon-blue text-sm font-semibold mt-3 hover:text-neon-green transition-colors"
                    >
                      Watch full presentation
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
