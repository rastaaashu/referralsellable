'use client';

import { MAIN_REF_LINK, SUPPORT_LINKS, EXTERNAL_LINKS } from '@/lib/config';

const stats = [
  { value: '20–40%', label: 'Target Monthly Returns', icon: '💰' },
  { value: '1000%+', label: 'Annual Potential', icon: '📈' },
  { value: '81%', label: 'Win Rate in Volatile Markets', icon: '🎯' },
  { value: '15+', label: 'Years Proven Track Record', icon: '🏆' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass-card p-6 sm:p-8 text-center hover:border-neon-blue/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{s.icon}</div>
              <div className="text-3xl sm:text-4xl md:text-5xl font-black gradient-text mb-2">{s.value}</div>
              <div className="text-gray-400 text-sm sm:text-base">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="section-divider mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/bit.png" alt="Bit1" className="h-10 rounded-lg object-contain" />
              <span className="font-bold text-lg">
                <span className="gradient-text">BIT1</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Powered by EndoTech <strong className="text-gray-300">AI copy trading</strong>. 81% win rate in volatile markets. Invitation-only access.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm text-gray-300 mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#performance" className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">Performance</a>
              <a href="#why" className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">Why Bit1</a>
              <a href="#videos" className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">Videos</a>
              <a href="#tutorial" className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">Tutorial</a>
              <a href="#steps" className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">How It Works</a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm text-gray-300 mb-4">Resources</h4>
            <div className="space-y-2">
              <a href={EXTERNAL_LINKS.endotechSite} target="_blank" rel="noopener noreferrer" className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">EndoTech.io</a>
              <a href={EXTERNAL_LINKS.performanceReport} className="block text-gray-500 text-sm hover:text-neon-blue transition-colors">Performance Report</a>
            </div>
          </div>

          {/* Community & Support */}
          <div>
            <h4 className="font-semibold text-sm text-gray-300 mb-4">Community &amp; Support</h4>
            <div className="space-y-2">
              <a href={SUPPORT_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 text-sm hover:text-neon-blue transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                Telegram Group
              </a>
              <a href={SUPPORT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 text-sm hover:text-neon-green transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp Group
              </a>
              <a href={SUPPORT_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-500 text-sm hover:text-blue-500 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook Group
              </a>
            </div>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-semibold text-sm text-gray-300 mb-4">Get Started</h4>
            <a
              href={MAIN_REF_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow !py-2.5 !px-5 !text-sm w-full text-center justify-center"
            >
              Start AI Copy Trading
            </a>
            <p className="text-gray-600 text-xs mt-3">
              No KYC &bull; Simple Registration &bull; 1M+ Pre-Registered Users
            </p>
          </div>
        </div>

        {/* Promoter Note */}
        <div className="glass-card px-4 py-3 mb-8 text-center">
          <p className="text-gray-600 text-xs">
            Promoters: Swap your referral link in <code className="text-neon-blue/60 bg-neon-blue/5 px-1.5 py-0.5 rounded text-xs">src/lib/config.ts</code> &rarr; Rebuild &amp; Deploy your custom ZIP
          </p>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Bit1 x EndoTech AI Copy Trading. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs max-w-md text-center sm:text-right">
            Disclaimer: Past performance is not indicative of future results. Trading involves risk. Only invest what you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}
