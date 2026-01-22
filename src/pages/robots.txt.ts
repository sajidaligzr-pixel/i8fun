import type { APIRoute } from "astro";

export const GET: APIRoute = () => {
  const body = `
# Allow all normal search engines
User-agent: *
Allow: /

# Block BuiltWith
User-agent: BuiltWith
Disallow: /

User-agent: BuiltWithBot
Disallow: /

Sitemap: https://i8fun.vercel.app/sitemap.xml
`;

  return new Response(body.trim(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
