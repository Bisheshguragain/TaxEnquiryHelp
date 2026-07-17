import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          'Googlebot',
          'Google-InspectionTool',
          'Bingbot',
          'DuckDuckBot',
          'Applebot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'Claude-SearchBot',
          'Claude-User',
          'PerplexityBot',
          'Perplexity-User',
          'facebookexternalhit',
          'LinkedInBot',
          'Twitterbot',
        ],
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'CCBot',
          'Bytespider',
          'Amazonbot',
          'Google-Extended',
          'Applebot-Extended',
        ],
        disallow: '/',
      },
      { userAgent: '*', disallow: '/' },
    ],
    sitemap: 'https://www.taxenquiryhelp.co.uk/sitemap.xml',
  };
}
