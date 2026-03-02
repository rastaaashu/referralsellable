// ============================================================
// PROMOTER CONFIG — Edit this file to customize your landing page
// After editing, rebuild & redeploy your site.
// ============================================================

// ── Default Referral / Registration Link ─────────────────────
// Used when no ?u= parameter is present in the URL
export const MAIN_REF_LINK =
  'https://limitless.ibportal.io/auth/register?e=xRLIEp2OQGqiLU3rMprCFk5N+qq2aPHB8a3oih8v0K8=&a=1';

// ── Promoter Directory ──────────────────────────────────────
// Add new promoters here: username → their referral link
// Visitors go to yourdomain.com/?u=username to get their link
export const PROMOTERS: Record<string, string> = {
  'prouplnk': 'https://limitless.ibportal.io/auth/register?e=mpGMc2LZmeXQZCg9liCpU+dgxhbuMsShfLgpOK2TKak=&a=1',
};

// ── Support / Community Links ───────────────────────────────
export const SUPPORT_LINKS = {
  telegram: 'https://t.me/blockchainpromax',
  whatsapp: 'https://wa.me/qr/MS5WIJPYHSSAD1',
  facebook: 'https://www.facebook.com/groups/2975702502641564/?ref=share&mibextid=NSMWBT',
};

// ── External Links ──────────────────────────────────────────
export const EXTERNAL_LINKS = {
  endotechSite: 'https://endotech.io',
  performanceReport: '/docs/perf-report.pdf',
};

// ── Video URLs ──────────────────────────────────────────────
// Spotlight = featured large video, grid = smaller cards below
export const VIDEO_URLS = {
  spotlight: {
    url: '/videos/live.mp4',
    title: 'Live Demonstration — Real Results, No Leverage',
    subtitle: 'Live results presentation showing AI copy trading in action',
    isLocal: true,
  },
  hero: {
    url: '/videos/intro1.mp4',
    title: 'Endotech and BIT1 Join Forces',
    subtitle: 'Everything you need to know about automated AI trading',
    isLocal: true,
  },
  grid: [
    {
      url: '/videos/vid.mp4',
      title: 'How to Benefit from BIT1 Exchange',
      subtitle: 'Learn how to get started and maximize your returns',
      badge: 'Guide',
      isLocal: true,
      presentationLink: 'https://youtu.be/WaqD9y3ZqPM?si=nw2tMkhC1bUsBpmT',
    },
  ],
};
