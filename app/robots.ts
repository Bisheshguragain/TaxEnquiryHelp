import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ['Googlebot', 'Bingbot', 'DuckDuckBot', 'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User'], allow: '/' },
      { userAgent: ['GPTBot', 'ClaudeBot', 'CCBot', 'Bytespider', 'Amazonbot'], disallow: '/' },
      { userAgent: '*', disallow: '/' },
    ],
    sitemap: 'https://www.taxenquiryhelp.co.uk/sitemap.xml',
    host: 'https://www.taxenquiryhelp.co.uk',
  };
}
