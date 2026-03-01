'use client';

import AnimatedSection from './AnimatedSection';
import dynamic from 'next/dynamic';
import { VIDEO_URLS } from '@/lib/config';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function HeroVideo() {
  const { hero } = VIDEO_URLS as { hero: any };

  return (
    <section className="relative py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">{hero.title}</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">{hero.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="video-wrapper">
            <div className="aspect-video">
              <ReactPlayer
                url={hero.url}
                width="100%"
                height="100%"
                controls
                light={hero.isLocal ? '/thumbs/video-thumb.png' : true}
                playing={false}
                config={{
                  file: { attributes: { poster: '/thumbs/video-thumb.png' } },
                }}
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
