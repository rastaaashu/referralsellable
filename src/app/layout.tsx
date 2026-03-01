import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bit1 EndoTech AI Copy Trading | 20-40% Monthly Returns | Invite Only',
  description:
    'Bit1 Exchange powered by EndoTech AI copy trading. Smarter. Automated. AI-driven copy trading with 20-40% monthly return targets. No fees, daily payouts, no leverage needed. AI auto-trading on Bit1 via Limitless IB Portal. Invitation only.',
  keywords:
    'AI copy trading, Bit1, EndoTech, AI trading, crypto copy trading, automated trading, passive income, AI auto-trading, copy trader, daily payouts, no leverage, Bit1 Exchange, Limitless IB Portal, crypto AI, automated crypto trading',
  openGraph: {
    title: 'Bit1 EndoTech AI Copy Trading | 20-40% Monthly | Invite Only',
    description:
      'AI-driven crypto copy trading with 15+ years proven track record. 1000%+ annual potential WITHOUT leverage. Daily payouts. AI auto-trading on Bit1 Exchange.',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bit1 EndoTech AI Copy Trading | 20-40% Monthly | Invite Only',
    description:
      'AI-driven crypto copy trading. 15+ years proven. Daily payouts, no leverage. Invitation only.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
