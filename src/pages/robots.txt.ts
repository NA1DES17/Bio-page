import type { APIRoute } from 'astro';
import { SITE } from '@config/site';

export const GET: APIRoute = () => {
  const sitemapUrl = `${SITE.url}/sitemap-index.xml`;
  const body = `
User-agent: *
Allow: /
Disallow: /404/

Sitemap: ${sitemapUrl}
`.trim();

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
