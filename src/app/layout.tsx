import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BT1 Exchange',
  openGraph: {
    title: 'BT1 Exchange',
  },
  twitter: {
    title: 'BT1 Exchange',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
